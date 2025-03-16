import { MongoClient } from "mongodb";

let db;

async function connectToDb(cb) {
  const client = new MongoClient(
    "mongodb+srv://node-server:WKxU6RWwWjtS6Kov@cluster0.u4ehz.mongodb.net/"
  );
  await client.connect();
  db = client.db("react-blog-db");
  cb();
}

export { db, connectToDb };
