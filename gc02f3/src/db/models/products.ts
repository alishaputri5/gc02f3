import { getMongoDbClientInstance } from "../config";
import { Db, ObjectId } from "mongodb";

export type Product = {
  _id: ObjectId;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
};

const DATABASE_NAME = process.env.MONGODB_DB_NAME;
const COLLECTION_PRODUCT = "products";

//pertama kita export const db dulu
export const getDb = async () => {
  const client = await getMongoDbClientInstance();
  const db: Db = client.db(DATABASE_NAME);

  return db;
};

export const getProduct = async () => {
  const db = await getDb();
  const product = (await db
    .collection(COLLECTION_PRODUCT)
    .find()
    .toArray()) as Product[];
  console.log(product);

  return product;
};

export const getProductBySlug = async (slug: string) => {
  const db = await getDb();
  const product = await db.collection(COLLECTION_PRODUCT).findOne({ slug });
  return product;
};

export const getPaginationProducts = async (
  limit: number,
  search: string | null
) => {
  let payload = {};
  if (!limit) {
    limit = 10;
  }
  console.log(search);
  if (search) {
    payload = { name: { $regex: search, $options: "i" } };
  }
  const db = await getDb();
  const product = (await db
    .collection(COLLECTION_PRODUCT)
    .find(payload)
    .toArray()) as Product[];
  // console.log(product);

  return product;
};
