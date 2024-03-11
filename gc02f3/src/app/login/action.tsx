"use server";
import { redirect } from "next/navigation";
import { z } from "zod";
import { getUserByEmail } from "@/db/models/users";
import { comparePassword } from "@/db/utils/hash";
import { createJoseToken } from "@/db/utils/joseToken";
import { Cookie } from "next/font/google";
import { cookies } from "next/headers";

export const doLogin = async (formData: FormData) => {
  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });
  const email = formData.get("email");
  const password = formData.get("password");

  const parsedData = loginSchema.safeParse({
    email,
    password,
  });

  if (!parsedData.success) {
    const errorPath = parsedData.error.issues[0].path[0];
    const errorMessage = parsedData.error.issues[0].message;
    const errorFinalMessage = `${errorPath} - ${errorMessage}`;

    return redirect(
      process.env.NEXT_PUBLIC_URL + `/login?error=${errorFinalMessage}`
    );
  }
  const user = await getUserByEmail(parsedData.data.email);

  if (!user || !comparePassword(parsedData.data.password, user.password)) {
    return redirect(
      process.env.NEXT_PUBLIC_URL + `/login?error=Invalid%20credentials`
    );
  }

  const payload = {
    userId: user._id,
    email: user.email,
  };

  const token = await createJoseToken(payload);
  console.log(token);
  cookies().set("token", token, {
    httpOnly: true,
    secure: false,
    expires: new Date(Date.now() + 1000 * 60 * 60),
    sameSite: "strict",
  });

  return redirect(process.env.NEXT_PUBLIC_URL + "");
};
