import { authOptions } from "@/lib/auth";
import { LemonSqueezyApiInstance } from "@/lib/axios";
import { getUserSession } from "@/lib/session";
import axios from "axios";
import { useSession } from "next-auth/react";

const DashboardPage = async () => {
  // const response = await LemonSqueezyApiInstance.get(
  //   "/products?filter[store_id]=115405"
  // );
  const session = await getUserSession();

  if (!session) {
    return <div>No usere found</div>;
  }
  // console.log("data =>", response.data);

  return (
    <div className="max-w-5xl mx-auto mt-7">
      <h2>Dashboard page {session?.user?.email}</h2>
      <div>
        {/* {response?.data?.data?.map((item: any) => (
          <span key={item.id}>
            <h2>{item.id}</h2>
            <h2>{item?.attributes?.name}</h2>
          </span>
        ))} */}
      </div>
    </div>
  );
};

export default DashboardPage;
