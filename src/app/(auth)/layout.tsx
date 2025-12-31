import { FC, ReactNode } from "react";
import Link from "next/link";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="absolute top-0 left-0 p-4">
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-10 hover:opacity-80 transition"
          />
        </Link>
      </div>
      <div className="bg-black p-10 rounded-md w-96 opacity-90">{children}</div>
    </div>
  );
};

export default AuthLayout;
