import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className="
          block
          rounded-md
          px-6
          pt-4
          pb-1
          w-full
          text-sm
          font-medium
          text-gray-400
          bg-neutral-700
          appearance-none
          focus:outline-none
          focus:ring-0
          peer
          "
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
