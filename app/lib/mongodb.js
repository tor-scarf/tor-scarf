import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // آدرس دیتابیس از .env
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("⚠️ لطفاً MONGODB_URI رو توی فایل .env تعریف کن");
}

if (process.env.NODE_ENV === "development") {
  // توی حالت dev کش بشه تا دوباره ساخته نشه
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
