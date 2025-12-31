import Link from "next/link";
import { buttonVariants } from "./ui/button";
// import { HandMetal } from "lucide-react";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import UserAccountnav from "./UserAccountnav";
import NavbarItem from "./NavbarItem";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="py-4 fixed w-full z-40 top-0 bg-gradient-to-b from-black to-transparent">
      <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90">
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-4 lg:h-7 hover:opacity-80 transition"
          />
        </Link>
        <div
          className="
        flex-row
        ml-8
        gap-7
        hidden
        lg:flex
        "
        >
          <NavbarItem label="Home" />
          <NavbarItem label="Shows" />
          <NavbarItem label="Movies" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by languages" />
        </div>
        <div className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"></div>
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
