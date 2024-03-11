import WishlistCard from "@/components/WishlistCard";
import { Wishlist } from "@/db/models/wishlist";
import { cookies } from "next/headers";

type MyResponse<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

const fetchWishlist = async () => {
  "use server";

  const response = await fetch(process.env.NEXT_PUBLIC_URL + "/api/wishlist", {
    method: "GET",
    headers: {
      Cookie: cookies().toString(),
    },
  });
  // console.log(response.ok, "di page whistlist.............");

  if (!response.ok) {
    throw new Error("Failed fetch wishlist");
  }

  const responseJson: MyResponse<Wishlist[]> = await response.json();

  return responseJson.data;
};

const Page = async () => {
  const wishlist = await fetchWishlist();
  // console.log(wishlist);

  return (
    <>
      <div className="grid grid-cols-4 max-md:items-center max-md:flex-col-reverse justify-between max-md:py-10 px-32 py-10 mt-52">
        {wishlist?.map((el, idx) => {
          return <WishlistCard el={el} key={idx} />;
        })}
      </div>
    </>
  );
};

export default Page;
