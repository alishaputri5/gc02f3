"use client";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/db/models/products";
import { useEffect, useState } from "react";

const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const fetchProduct = async (search: string = "") => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_URL + "/api/products?search=" + search
    );
    if (!response) {
      throw new Error("ada yg error");
    }
    const { data }: { data: Product[] } = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProduct(search);
  }, [search]);
  return (
    <>
      <form className="flex justify-center">
        <input
          type="text"
          name="search"
          id=""
          placeholder="Search..."
          className="mt-52 border border-black w-[400px] px-2 py-1"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className="grid grid-cols-4 max-md:items-center max-md:flex-col-reverse justify-between max-md:py-10 px-32 py-10 mt-10">
        {products.map((product: Product, idx) => {
          return <ProductCard product={product} key={idx} />;
        })}
      </div>
    </>
  );
};

export default Page;
