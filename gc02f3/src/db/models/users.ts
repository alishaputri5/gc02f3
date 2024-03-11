import { getMongoDbClientInstance } from "@/db/config";
import { Db, ObjectId } from "mongodb";
import { hashPassword } from "../utils/hash";

export type UserModel = {
  _id: ObjectId;
  name?: string;
  username: string;
  email: string;
  password: string;
};

export type UserInput = Omit<UserModel, "_id">;

const DATABASE_NAME = process.env.MONGODB_DB_NAME;
const COLLECTION_USER = "users";

export const getDb = async () => {
  const client = await getMongoDbClientInstance();
  const db: Db = client.db(DATABASE_NAME);

  return db;
};

export const getUsers = async () => {
  const db = await getDb();
  const users = (await db
    .collection(COLLECTION_USER)
    .find({})
    .project({ password: 0 })
    .toArray()) as UserModel[];

  return users;
};

export const addUser = async (user: UserInput) => {
  const modifiedUser: UserInput = {
    ...user,
    password: hashPassword(user.password),
  };

  const db = await getDb();
  const result = await db.collection(COLLECTION_USER).insertOne(modifiedUser);

  return result;
};

export const getUserByEmail = async (email: string) => {
  const db = await getDb();
  const user = (await db
    .collection(COLLECTION_USER)
    .findOne({ email })) as UserModel;
  return user;
};
