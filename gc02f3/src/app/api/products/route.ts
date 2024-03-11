import { Product, getPaginationProducts } from "@/db/models/products";
import { NextRequest, NextResponse } from "next/server";

type MyResponse<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  console.log(searchParams);
  const limit = searchParams.get("limit");
  const limitNumber: number = Number(limit) as number;
  const search = searchParams.get("search");
  console.log(search, "<<<<<< di get route products");

  const products = await getPaginationProducts(limitNumber, search);
  // console.log(products);

  return NextResponse.json<MyResponse<Product[]>>(
    {
      statusCode: 200,
      message: "OK!",
      data: products,
    },
    {
      status: 200,
    }
  );
};
