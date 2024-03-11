import WishlistButton from "@/components/WishlistButton";
import { Product } from "@/db/models/products";
import rupiah from "@/db/utils/formatRupiah";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";

type MyResponse<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

export const generateMetadata = async (
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  return {
    title: params.slug,
  };
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const fetchProduct = async (slug: string) => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_URL + `/api/products/${slug}`,
      {
        cache: "no-store",
      }
    );
    const responseJson: MyResponse<Product> = await response.json();

    if (!response) {
      throw new Error("ada yg error");
    }
    return responseJson;
  };

  const product = await fetchProduct(params.slug);

  return (
    <section>
      <div className="mt-52 flex px-52 justify-center">
        <div className="w-[45%] font-thin">
          <p>
            <Link href="/" className="cursor-pointer hover:font-normal">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/products" className="cursor-pointer hover:font-normal">
              All Product
            </Link>{" "}
            / {product?.data?.name}
          </p>
          <p className="mt-20 mb-3 text-2xl font-normal">
            {product.data?.name}
          </p>
          <p>{product.data?.excerpt}</p>
          <button className=" mt-20 border border-black flex justify-between py-2 w-[75%] px-4 hover hover:bg-black hover:text-white">
            <p>{rupiah(Number(product?.data?.price))}</p>
            <p>ADD TO BAG</p>
          </button>
          <p className="text-xs mt-2">
            Made to order: Delivered in Jakarta by March 01
          </p>
          <div className="my-20 font-thin">
            <div className="">
              <WishlistButton productId={product?.data?._id} />
            </div>

            <ul className="text-sm py-4">
              <li>
                <span className="text-2xl">+ </span>Shipping and Returns
              </li>
              <li>
                <span className="text-2xl">+ </span>Sustainability &
                Responsibility
              </li>
              <li>
                <span className="text-2xl">+ </span>Contact Us
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[45%]">
          <img
            src={product.data?.images[0]}
            className="w-[80%] items-center h-[486px]"
          />
          <div className="my-10 font-thin text-sm">
            {product.data?.description}
          </div>
          <img
            src={product.data?.images[1]}
            className="w-[80%] items-center h-[486px] mt-20"
          />
          <div className="my-16 font-thin ">
            <p>Aditional Reading</p>
            <ul className="text-sm py-4">
              <li>
                <span className="text-2xl">+ </span>Materials
              </li>
              <li>
                <span className="text-2xl">+ </span>Dimention
              </li>
              <li>
                <span className="text-2xl">+ </span>Product Care
              </li>
            </ul>
          </div>
          <div className="flex w-full gap-2 mb-10">
            <img
              src={product.data?.images[2]}
              className="w-[40%] items-center h-[286px]"
            />
            <img
              src={product.data?.images[3]}
              className="w-[30%] items-center h-[186px]"
            />

            <img
              src={product.data?.images[4]}
              className="w-[30%] items-center h-[186px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Page;
