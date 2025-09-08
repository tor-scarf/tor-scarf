import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db();
  const products = await db.collection("products").find().toArray();
  return Response.json(products);
}

export async function POST(req) {
  const data = await req.json();
  const client = await clientPromise;
  const db = client.db();
  await db.collection("products").insertOne(data);
  return Response.json({ message: "Product added" });
}

export async function PUT(req) {
  const { id, ...rest } = await req.json();
  const client = await clientPromise;
  const db = client.db();
  await db.collection("products").updateOne({ _id: id }, { $set: rest });
  return Response.json({ message: "Product updated" });
}

export async function DELETE(req) {
  const { id } = await req.json();
  const client = await clientPromise;
  const db = client.db();
  await db.collection("products").deleteOne({ _id: id });
  return Response.json({ message: "Product deleted" });
}