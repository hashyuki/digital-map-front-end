import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "cursor-pointer rounded-full shadow-xl",
  variants: {
    variant: {
      default: `
        bg-white
        text-teal-500
        outline
        outline-1
        outline-white
        backdrop-blur-sm
        active:outline-teal-500
        disabled:cursor-not-allowed
        disabled:text-gray-400
        disabled:outline-gray-400`,
    },
    size: {
      default: "px-4 py-2",
      sm: "px-2 py-1",
      lg: "px-6 py-3",
      icon: "p-2",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={buttonVariants({ variant, size })}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
