"use client";

import { FC, ReactNode } from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

interface GoogleSignInButtonProps {
  children: ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle = () => signIn("google", { callbackUrl: "/profiles" });

  return (
    <Button
      onClick={loginWithGoogle}
      className="w-full mt-6 bg-red-600 text-white hover:bg-red-700"
    >
      {children}
    </Button>
  );
};

export default GoogleSignInButton;
