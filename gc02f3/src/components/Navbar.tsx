import { revalidatePath } from "next/cache";

import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

const Navbar = async () => {
  const cookiesStore = cookies();
  const token = cookiesStore.get("token");
  console.log(token, "<<<<<<<<<< di navbar");
  const handleLogout = async () => {
    "use server";

    cookies().delete("token");
    revalidatePath("/");
    redirect("/login");
  };
  return (
    <div className="flex justify-start">
      <div className="flex bg-transparant w-full p-14 fixed">
        <ul className="font-light text-xs">
          <li className="py-1">Women</li>
          <li className="py-1">Men</li>
          <li className="py-1">Homeware</li>
          <li className="py-1">Gifts</li>
        </ul>
        <div className="m-auto">
          <Link href="/" className="items-center text-5xl font-semibold">
            SloggedUp
          </Link>
        </div>
        <ul className="font-light text-xs">
          <li className="py-1">Bag</li>
          <Link href="/login" className="py-1">
            Account
          </Link>
          <li className="py-1">Search</li>
          <li className="py-1">
            <Link href="/wishlist">Wishlist</Link>
          </li>
          {token?.value && (
            <form
              action={handleLogout}
              className="text-red-600 hover:text-red-400 transition-colors duration-300"
            >
              <button type="submit">Logout</button>
            </form>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
