import { MongoClient } from "mongodb";
import { hash } from "bcryptjs";
import 'dotenv/config';

async function createAdmin() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();

  const password = await hash("123456", 10);
  await db.collection("users").insertOne({
    email: "admin@example.com",
    password,
    role: "admin",
  });

  console.log("✅ Admin created: admin@example.com / 123456");
  await client.close();
}

createAdmin();
