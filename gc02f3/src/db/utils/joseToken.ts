import * as jose from "jose";
const SECRET_KEY = process.env.SECRET_KEY;

export const createJoseToken = async (payload: jose.JWTPayload) => {
  const secretKey = new TextEncoder().encode(SECRET_KEY);

  const token = new jose.SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .sign(secretKey);

  return token;
};

export const readPayloadJose = async <T>(token: string) => {
  const secretKey = new TextEncoder().encode(SECRET_KEY);
  const payloadJose = await jose.jwtVerify<T>(token, secretKey);

  return payloadJose.payload;
};
