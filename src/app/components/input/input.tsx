import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const textVariants = tv({
  base: "cursor-pointer rounded-full shadow-xl",
  variants: {
    variant: {
      default: `
        bg-white
        px-4
        py-2
        text-gray-700
        outline
        outline-1
        outline-teal-500
        backdrop-blur-sm
        disabled:cursor-not-allowed
        disabled:text-gray-400
        disabled:outline-gray-400`,
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof textVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, variant, ...props }, ref) => {
    return (
      <input
        type={type}
        className={textVariants({ variant })}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
