"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { useMap } from "./map.hooks";

const mapVariants = tv({
  base: "",
  variants: {
    variant: {
      default: "",
    },
    size: {
      default: "left-0 top-0 h-screen w-screen",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Map = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & VariantProps<typeof mapVariants>
>(({ variant, size, ...props }, ref) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  useMap(containerRef);

  return (
    <div
      ref={containerRef}
      className={mapVariants({ variant, size })}
      {...props}
    />
  );
});

Map.displayName = "Map";

export { Map, mapVariants };
