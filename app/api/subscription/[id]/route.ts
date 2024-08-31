import { LemonSqueezyApiInstance } from "@/lib/axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const response = await LemonSqueezyApiInstance.get(
      `subscriptions/${params.id}`
    );

    return NextResponse.json({ message: response.data.data });
  } catch (error) {
    return NextResponse.json({ message: "error in fetching subscription" });
  }
}
