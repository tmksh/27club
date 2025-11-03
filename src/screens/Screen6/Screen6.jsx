import React from "react";
import { Footer3 } from "./sections/Footer3";
import { Frame12 } from "./sections/Frame12";
import { Frame13 } from "./sections/Frame13";
import { Frame14 } from "./sections/Frame14";
import { Frame15 } from "./sections/Frame15";

export const Screen6 = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-[94px] relative overflow-hidden bg-[url(/img/image-3.png)] bg-cover bg-[50%_50%]"
      data-model-id="411:1121"
    >
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Footer3 />
    </div>
  );
};
