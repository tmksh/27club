import React from "react";
import { Footer1 } from "./sections/Footer1";
import { Frame5 } from "./sections/Frame5";
import { Frame6 } from "./sections/Frame6";
import { Frame7 } from "./sections/Frame7";
import { Frame8 } from "./sections/Frame8";

export const ScreenWrapper = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-[94px] relative overflow-hidden bg-[url(/img/image-3.png)] bg-cover bg-[50%_50%]"
      data-model-id="411:1115"
    >
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Footer1 />
    </div>
  );
};
