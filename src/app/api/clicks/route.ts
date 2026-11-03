import { connection } from "next/server";
import { linkIds } from "@/lib/links";
import { getClicksCollection } from "@/lib/mongodb";

// 모든 링크의 현재 클릭 수를 한 번에 반환: { counts: { instagram: 42, ... } }
export async function GET() {
  await connection(); // 미리 만들어 두지 않고 요청마다 최신 값을 읽음
  try {
    const clicks = await getClicksCollection();
    const docs = await clicks.find({ _id: { $in: [...linkIds] } }).toArray();
    const counts: Record<string, number> = {};
    for (const id of linkIds) counts[id] = 0;
    for (const doc of docs) counts[doc._id] = doc.count;
    return Response.json({ counts });
  } catch (error) {
    console.error("클릭 수 조회 실패", error);
    return Response.json({ error: "클릭 수를 불러오지 못했습니다" }, { status: 500 });
  }
}

// 링크 하나의 클릭 수를 1 증가: body { id: "instagram" }
export async function POST(request: Request) {
  let id: unknown;
  try {
    ({ id } = await request.json());
  } catch {
    return Response.json({ error: "잘못된 요청입니다" }, { status: 400 });
  }
  if (typeof id !== "string" || !linkIds.has(id)) {
    return Response.json({ error: "알 수 없는 링크입니다" }, { status: 400 });
  }
  try {
    const clicks = await getClicksCollection();
    const doc = await clicks.findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );
    return Response.json({ id, count: doc?.count ?? 1 });
  } catch (error) {
    console.error("클릭 수 저장 실패", error);
    return Response.json({ error: "클릭 수를 저장하지 못했습니다" }, { status: 500 });
  }
}
