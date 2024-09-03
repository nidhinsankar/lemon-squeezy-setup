import { NextRequest } from "next/server";

export async function POST(req: Request) {
  const clonedReq = req.clone();
  const eventType = req.headers.get("X-Event-Name");
  const body = await req.json();
}
