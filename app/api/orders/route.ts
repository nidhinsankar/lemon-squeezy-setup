import { LemonSqueezyApiInstance } from "@/lib/axios";

export async function GET() {
  try {
    const response = await LemonSqueezyApiInstance.get(
      "/products?filter[store_id]=115405"
    );

    return Response.json({
      message: "request sucess",
      data: response.data,
    });
  } catch (error) {
    console.log("error in get product", error);
    return Response.json({ message: "an error occured", error: error });
  }
}
