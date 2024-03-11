import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { readPayloadJose } from "./db/utils/joseToken";

export const middleware = async (request: NextRequest) => {
  if (
    !request.url.includes("/api") &&
    !request.url.includes("_next/static") &&
    !request.url.includes("_next/image") &&
    !request.url.includes("favicon.ico")
  ) {
    console.log(request.method, request.url);
  }

  if (request.url.includes("/api/wishlist")) {
    console.log("/wishlist middleware", request.method, request.url);
    const cookiesStore = cookies();
    const token = cookiesStore.get("token");

    if (!token) {
      return NextResponse.json({
        statusCode: 401,
        error: "Unanthorized",
      });
    }
    const tokenData = (await readPayloadJose(token.value)) as {
      userId: string;
      email: string;
    };
    console.log(tokenData, "<<<<< token data di middleware");

    const requestHeaders = new Headers(request.headers);

    requestHeaders.set("user-id", tokenData.userId);
    requestHeaders.set("user-email", tokenData.email);

    return NextResponse.next({ headers: requestHeaders });
  }
  return NextResponse.next();
};
