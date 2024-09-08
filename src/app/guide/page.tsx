"use client";

import React from "react";
import * as Guide from "@/features/guide/components/index";
import { Button } from "@/components/button/button";
import { BiSolidNavigation } from "react-icons/bi";
import { MdOutlineMyLocation } from "react-icons/md";
import { tv } from "tailwind-variants";

export default function Home() {
  const [userVisibility, setUserVisibility] = React.useState(false);

  const toggleUserVisibility = () => {
    setUserVisibility((prev) => !prev);
  };

  return (
    <>
      <Guide.Map>
        <Guide.UserMarker isVisible={userVisibility} />
      </Guide.Map>
      <div className={alignTopRight()}>
        <Button size="icon" onClick={toggleUserVisibility}>
          {userVisibility ? <MdOutlineMyLocation /> : <BiSolidNavigation />}
        </Button>
      </div>
    </>
  );
}

const styles = tv({
  slots: {
    alignTopRight: `
        absolute right-2 top-2
        flex flex-col items-end gap-2`,
  },
});

const { alignTopRight } = styles();
