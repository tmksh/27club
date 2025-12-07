import React from "react";
import { Footer2 } from "./sections/Footer2";
import { Frame9 } from "./sections/Frame9";
import { Frame10 } from "./sections/Frame10";
import { Frame11 } from "./sections/Frame11";

export const Screen5 = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-[94px] relative bg-[url(/img/27-background.png)] bg-repeat-y bg-[50%_0%] md:min-w-[1440px]"
      data-model-id="411:1117"
    >
      <Frame9 />
      <Frame10 />
      <Frame11 />
      <Footer2 />
    </div>
  );
};
