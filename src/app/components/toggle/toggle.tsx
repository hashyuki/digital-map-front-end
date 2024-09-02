import * as TogglePrimitive from "@radix-ui/react-toggle";
import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const toggleVariants = tv({
  base: "cursor-pointer shadow-xl",
  variants: {
    variant: {
      default: `
      rounded-xl
      bg-white
      bg-opacity-50
      text-gray-400
      outline
      outline-1 
      outline-gray-400 
      backdrop-blur-sm
      disabled:cursor-not-allowed 
      disabled:text-gray-400
      disabled:outline-gray-400
      radix-state-on:text-teal-500
      radix-state-on:outline 
      radix-state-on:outline-1
      radix-state-on:outline-teal-500
      radix-state-on:disabled:text-gray-400
      radix-state-on:disabled:outline-gray-400`,
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

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={toggleVariants({ variant, size })}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
