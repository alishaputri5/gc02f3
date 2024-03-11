"use server";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const handleAddWishlist: any = async (productId: ObjectId) => {
  "use server";
  await fetch(process.env.NEXT_PUBLIC_URL + "/api/wishlist", {
    method: "POST",
    headers: {
      Cookie: cookies().toString(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productId,
    }),
  });

  revalidatePath("/wishlist");
  redirect("/wishlist");
};

export const handleDeleteWishlist: any = async (id: string) => {
  "use server";
  await fetch(process.env.NEXT_PUBLIC_URL + "/api/wishlist", {
    method: "DELETE",
    headers: {
      Cookie: cookies().toString(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
    }),
  });
  revalidatePath("/wishlist");
};
