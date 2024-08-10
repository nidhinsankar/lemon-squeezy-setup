import { getUserSession } from "@/lib/session";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  const session = await getUserSession();
  return (
    <div className="max-w-5xl bg-red-300 mx-auto py-4 px-4 flex justify-between">
      <Link href={"/"}>Setup</Link>
      <div>{session?.user?.email}</div>
      <Image
        src={session?.user?.image!}
        width={30}
        height={50}
        alt="progile-image"
      />
      <nav className="flex gap-3">
        <Link href={"/login"}>Login</Link>
        <Link href={"/"}>Dashboard</Link>
      </nav>
    </div>
  );
};
export default Navbar;
