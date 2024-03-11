import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/db/models/products";

type MyResponse<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

const fetchProduct = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_URL + "/api/products");
  const responseJson: MyResponse<Product[]> = await response.json();
  if (!response) {
    throw new Error("ada yg error");
  }
  return responseJson;
};

const Page = async () => {
  const products = await fetchProduct();
  return (
    <>
      <div className="flex mt-52 py-2 border border-black">
        <p className="text-sm font-light m-auto">
          Free shipping for orders over $1000 worldwide. Taxes and import duties
          included for all orders
        </p>
      </div>
      <div className="mt-20 flex items-center justify-center text-center w-screen">
        New Arrivals
      </div>
      <div className="flex px-72 mt-24">
        <img src="https://i.pinimg.com/474x/29/2f/f9/292ff99e37eeae86c75eef236681e308.jpg" />
        <img
          src="https://i.pinimg.com/564x/05/05/e8/0505e8d0a8c30c333f513e27a76beeb9.jpg"
          className="w-[400px] h-[550px] self-end "
        />
      </div>
      <div className="w-56 mt-20 pb-10 mx-72">
        <p className="font-thin text-sm text-wrap ">
          For SS24, Completedworks continues its playful rebalancing of the
          dichotomies that define the contemporary world – the need to be both
          calming and unnerving, traditional and subversive, surreal and
          everyday.
        </p>
      </div>
      <Link
        href="/products"
        className="w-56 mx-72 font-thin text-sm border-b border-black"
      >
        Discover New Arrival
      </Link>
      <div className="w-[80%] mt-32 pb-10 mx-32 flex justify-between">
        <p className="text-xl font-thin">Always Out-Of-Order.</p>
        <Link
          href="/products"
          className="text-xl font-thin border-b border-black"
        >
          See All
        </Link>
      </div>
      <div className="grid grid-cols-4 max-md:items-center max-md:flex-col-reverse justify-between max-md:py-10 px-32 py-10">
        {products.data?.splice(0, 4).map((product: Product, idx) => {
          return <ProductCard product={product} key={idx} />;
        })}
      </div>
    </>
  );
};

export default Page;
