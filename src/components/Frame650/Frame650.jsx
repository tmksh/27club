/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Group170 } from "../Group170";

export const Frame650 = ({
  className,
  group170GroupClassName,
  group170GroupClassNameOverride,
}) => {
  return (
    <div
      className={`relative w-full ${className}`}
    >
      <Group170
        className={group170GroupClassName}
        frameClassName="!h-full !flex-[unset] !w-full"
      />
    </div>
  );
};
