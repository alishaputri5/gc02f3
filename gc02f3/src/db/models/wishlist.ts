import { getMongoDbClientInstance } from "../config";
import { Db, ObjectId } from "mongodb";
import { Product } from "./products";

export type Wishlist = {
  _id: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  createdAt: string;
  updatedAt: string;
  wishlistProduct: Product;
};

const DATABASE_NAME = process.env.MONGODB_DB_NAME;
const COLLECTION_WISHLIST = "wishlist";

export const getDb = async () => {
  const client = await getMongoDbClientInstance();
  const db: Db = client.db(DATABASE_NAME);

  return db;
};

export const getWishlist = async (userId: string) => {
  const db = await getDb();
  const agg = [
    {
      $lookup: {
        as: "wishlistProduct",
        from: "products",
        foreignField: "_id",
        localField: "productId",
      },
    },
    {
      $match: {
        userId: new ObjectId(userId),
      },
    },
    {
      $unwind: { path: "$wishlistProduct" },
    },
  ];
  const wishlist = (await db
    .collection(COLLECTION_WISHLIST)
    .aggregate(agg)
    .toArray()) as Wishlist[];

  return wishlist;
};

export const addWishlist = async (
  userId: string,
  { productId }: { productId: string }
) => {
  const createdAt = new Date();
  const updatedAt = new Date();
  const db = await getDb();

  const wisheslist = await db
    .collection(COLLECTION_WISHLIST)
    .find({ userId: new ObjectId(userId) })
    .toArray();

  console.log(wisheslist, "<<<<< di db models add wishlist");

  const foundWishlist = wisheslist.find((el) => {
    console.log(el);
    return el.productId == productId;
  });

  console.log(foundWishlist, "<<<<<< foundWishlist");
  if (foundWishlist) {
    throw new Error("Product already added in wishlist");
  }

  const addWishlist = await db.collection(COLLECTION_WISHLIST).insertOne({
    userId: new ObjectId(userId),
    productId: new ObjectId(productId),
    createdAt,
    updatedAt,
  });

  const addedWishlist = await db.collection(COLLECTION_WISHLIST).findOne({
    _id: addWishlist.insertedId,
  });
  return addedWishlist;
};

export const removeWishlist = async (id: string, userId: string) => {
  const db = await getDb();
  const removedWishlist = await db.collection(COLLECTION_WISHLIST).deleteOne({
    userId: new ObjectId(userId),
    _id: new ObjectId(id),
  });

  console.log(removedWishlist);
  return removedWishlist;
};
