"use client";
import { handleAddWishlist } from "@/app/wishlist/acrtion";
import { ObjectId } from "mongodb";
import { IoIosHeartEmpty } from "react-icons/io";

const WishlistButton = ({ productId }: { productId: ObjectId | undefined }) => {
  return (
    <div
      onClick={() => handleAddWishlist(productId)}
      className="cursor-pointer hover:text-gray-500 flex flex-row gap-2 items-center"
    >
      <IoIosHeartEmpty size={18} />
      <p>Save The Piece</p>
    </div>
  );
};

export default WishlistButton;
