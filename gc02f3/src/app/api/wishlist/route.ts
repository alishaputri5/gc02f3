import {
  Wishlist,
  addWishlist,
  getWishlist,
  removeWishlist,
} from "@/db/models/wishlist";
import { NextRequest, NextResponse } from "next/server";

type MyResponse<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

export const GET = async (request: NextRequest) => {
  const userId: any = request.headers.get("user-id");
  // console.log(userId, "<<<<<< get di wishlist route");
  const wishlist = await getWishlist(userId);
  // console.log(wishlist, "ini wislistttt route");

  return Response.json(
    {
      statusCode: 200,
      message: "Success get data",
      data: wishlist,
    },
    {
      status: 200,
    }
  );
};

export const POST = async (request: NextRequest) => {
  const data = await request.json();
  console.log(data);
  const userId = request.headers.get("user-id") as string;

  await addWishlist(userId, data);
  return NextResponse.json(
    {
      statusCode: 201,
      message: "Successfully added wishlist",
    },
    {
      status: 201,
    }
  );
};

export const DELETE = async (request: NextRequest) => {
  try {
    const userId = request.headers.get("user-id") as string;
    const { id } = await request.json();
    await removeWishlist(id, userId);

    return NextResponse.json<MyResponse<unknown>>(
      {
        statusCode: 200,
        message: "Wishlist has been removed",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
