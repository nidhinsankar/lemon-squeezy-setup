import { LemonSqueezyApiInstance } from "@/lib/axios";
import { getUserSession } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const session = await getUserSession();
    const reqData = await req.json();

    if (!reqData.productId) {
      return Response.json(
        { message: "productId is required" },
        { status: 400 }
      );
    }
    const response = await LemonSqueezyApiInstance.post("/checkouts", {
      data: {
        type: "checkouts",
        attributes: {
          checkout_data: {
            email: session?.user?.email,
            name: session?.user?.name,
          },
          product_options: {
            redirect_url: `${process.env.APP_URL}/dashboard`,
          },
        },
        relationships: {
          store: {
            data: {
              type: "stores",
              id: process.env.LEMON_SQUEEZY_STORE_ID!,
            },
          },
          variant: {
            data: {
              type: "variants",
              id: reqData.productId.toString(),
            },
          },
        },
      },
    });

    return Response.json({ data: response.data.data?.attributes?.url });
  } catch (error) {
    console.log("error", error);
    return Response.json({ message: "An error occured", status: 500, error });
  }
}
