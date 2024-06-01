import mongoose from "mongoose";
const MONGODB_URL =
  process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/nextlab2";
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}
export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URL)
      .then((mongoose) => {
        console.log("connected to db ..!");
        return mongoose;
      })
      .catch((error) => {
        console.log("cannot connected db", error);
        throw error;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}