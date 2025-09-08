import { MongoClient } from "mongodb";
import { hash } from "bcryptjs";
import readline from "readline";
import 'dotenv/config';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function createUser() {
  const email = await askQuestion("Enter user email: ");
  const plainPassword = await askQuestion("Enter user password: ");

  rl.close();

  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();

  const password = await hash(plainPassword, 10);
  await db.collection("users").insertOne({
    email,
    password,
    role: "user",
  });

  console.log(`✅ User created: ${email} / ${plainPassword}`);
  await client.close();
}

createUser();
