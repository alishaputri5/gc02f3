"use client";

import { Product } from "@/db/models/products";
import rupiah from "@/db/utils/formatRupiah";
import Link from "next/link";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const ProductCard = ({ product }: { product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [limit, setLimit] = useState(true);

  // async function fetchProduct() {
  //   const response = await fetch(process.env.NEXT_PUBLIC_URL+`/api/products?limit=${limit}`);
  //   const responseJson: MyResponse<Product[]> = await response.json();
  //   if (!response) {
  //     throw new Error("ada yg error");
  //   }
  //   return responseJson;
  // };

  return (
    <>
      <div>
        <div
          key={product.slug}
          className="max-md:text-center max-md:w-[90%] max-md:gap-3 flex flex-col w-[257px]"
        >
          <Link
            href={`/products/${product.slug}`}
            className="flex justify-center"
          >
            {/* <img src={product.images[0]} className="w-[257px] h-[386px]" /> */}
            <img
              src={isHovered ? product.images[1] : product.images[0]}
              className="w-[257px] h-[386px]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </Link>
          <div className="py-3 grid grid-cols-2">
            <p className="first-letter:uppercase text-m font-thin">
              {product.name}
            </p>
            <p className="flex justify-end text-m font-thin">
              {rupiah(product.price)}
            </p>
          </div>
          <p className="text-sm font-thin overflow-hidden overflow-ellipsis whitespace-nowrap w-[257px]">
            {product.excerpt}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
