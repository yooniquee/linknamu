import { MongoClient } from "mongodb";

// 개발 중 코드가 다시 로드돼도 연결을 하나만 쓰도록 전역에 보관
const globalForMongo = globalThis as unknown as {
  mongoClientPromise?: Promise<MongoClient>;
};

function getClient(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다 (.env.local 확인)");
  }
  if (!globalForMongo.mongoClientPromise) {
    globalForMongo.mongoClientPromise = new MongoClient(uri).connect();
  }
  return globalForMongo.mongoClientPromise;
}

type ClickDoc = { _id: string; count: number };

export async function getClicksCollection() {
  const client = await getClient();
  return client.db("linknamu").collection<ClickDoc>("clicks");
}
