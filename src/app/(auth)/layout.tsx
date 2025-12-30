import { FC, ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="bg-black p-10 rounded-md w-96 opacity-90">{children}</div>
  );
};

export default AuthLayout;
