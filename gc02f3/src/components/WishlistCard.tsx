"use client";

import { handleDeleteWishlist } from "@/app/wishlist/acrtion";
import { Wishlist } from "@/db/models/wishlist";
import rupiah from "@/db/utils/formatRupiah";

const WishlistCard = ({ el }: { el: Wishlist }) => {
  return (
    <div className="max-md:text-center max-md:w-[90%] max-md:gap-3 flex flex-col w-[257px]">
      <div className="flex justify-center">
        <img
          src={el.wishlistProduct?.images[0]}
          className="w-[257px] h-[386px]"
        />
      </div>
      <div className="py-3 grid grid-cols-2">
        <p className="first-letter:uppercase text-m font-thin">
          {el.wishlistProduct.name}
        </p>
        <p className="flex justify-end text-m font-thin">
          {rupiah(el.wishlistProduct.price)}
        </p>
      </div>
      <p className="text-sm font-thin overflow-hidden overflow-ellipsis whitespace-nowrap w-[257px]">
        {el.wishlistProduct.excerpt}
      </p>
      <p
        onClick={() => {
          handleDeleteWishlist(el._id);
          console.log("deleted");
        }}
      >
        Remove
      </p>
    </div>
  );
};

export default WishlistCard;
