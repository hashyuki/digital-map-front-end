"use client";
import mapboxgl from "mapbox-gl";
import React, { createContext, forwardRef, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { tv, type VariantProps } from "tailwind-variants";
import { useMap, useUserMarker } from "./map.hooks";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY!;

const MapContext = createContext<mapboxgl.Map | null>(null);

/* -------------------------------------------------------------------------------------------------
 * Map
 * -----------------------------------------------------------------------------------------------*/

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

const Map = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & VariantProps<typeof mapVariants>
>(({ variant, size, ...props }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const map = useMap(containerRef);

  return (
    <MapContext.Provider value={map}>
      <div
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLDivElement | null>).current =
              node;
          }
        }}
        className={mapVariants({ variant, size })}
        {...props}
      />
    </MapContext.Provider>
  );
});

Map.displayName = "Map";

/* -------------------------------------------------------------------------------------------------
 * UserMarker
 * -----------------------------------------------------------------------------------------------*/

const UserMarker: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  useUserMarker(isVisible);
  return null;
};

UserMarker.displayName = "UserMarker";

export { Map, mapVariants, MapContext, UserMarker };
