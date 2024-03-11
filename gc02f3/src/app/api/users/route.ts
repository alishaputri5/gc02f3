import { NextRequest, NextResponse } from "next/server";
import { addUser, getUsers } from "@/db/models/users";
import { z } from "zod";

type MyResponse<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

const userRegisterSchema = z.object({
  name: z.string().optional(), //not required???
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
});

export const GET = async () => {
  const users = await getUsers();

  return Response.json(
    {
      statusCode: 200,
      message: "OK masuk!",
      data: users,
    },
    {
      status: 200,
    }
  );
};

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();
    const parsedData = userRegisterSchema.safeParse(data);
    if (!parsedData.success) {
      throw parsedData.error;
    }

    const user = await addUser(parsedData.data);
    console.log(user);
    return NextResponse.json<MyResponse<unknown>>(
      {
        statusCode: 201,
        message: "Successfully create new user!",
        data: user,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log(error);

      const errorPath = error.issues[0].path[0];
      const errorMessage = error.issues[0].message;

      return NextResponse.json<MyResponse<never>>(
        {
          statusCode: 400,
          error: `${errorPath} - ${errorMessage}`,
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json<MyResponse<never>>(
      {
        statusCode: 500,
        message: "Internal Server Error !",
      },
      {
        status: 500,
      }
    );
  }
};
