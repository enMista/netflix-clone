import { FC, ReactNode } from "react";
import Link from "next/link";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover flex flex-col justify-center items-center">
      <div className="absolute inset-0 bg-black/60 lg:bg-black/50 flex flex-col justify-center items-center p-4 w-full">
        <div className="absolute top-0 left-0 p-4">
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-10 hover:opacity-80 transition"
            />
          </Link>
        </div>
        <div className="bg-black p-10 rounded-md w-96 opacity-90">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
