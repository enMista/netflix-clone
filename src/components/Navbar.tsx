import Link from "next/link";
import { buttonVariants } from "./ui/button";
// import { HandMetal } from "lucide-react";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import UserAccountnav from "./UserAccountnav";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="py-4 fixed w-full z-10 top-0 bg-gradient-to-b from-black to-transparent">
      <div className="flex items-center justify-between px-8">
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-10 hover:opacity-80 transition"
          />
        </Link>
        {session?.user ? (
          <UserAccountnav />
        ) : (
          <Link href="/sign-in" className={buttonVariants()}>
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
