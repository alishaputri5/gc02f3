import { getProductBySlug } from "@/db/models/products";
import { NextRequest, NextResponse } from "next/server";

type MyResponse<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

export const GET = async (
  request: NextRequest,
  { params }: { params: { slug: string } }
) => {
  const productSlug = await getProductBySlug(params.slug);
  return NextResponse.json<MyResponse<unknown>>(
    {
      statusCode: 201,
      message: "OK",
      data: productSlug,
    },
    {
      status: 201,
    }
  );
};
