import React from "react";
import { FooterInstanceWrapper } from "./sections/FooterInstanceWrapper";
import { Frame3 } from "./sections/Frame3";
import { Frame4 } from "./sections/Frame4";
import { Frame20Wrapper } from "./sections/Frame20Wrapper";

export const ScreenScreen = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-[94px] relative bg-[url(/img/image-2.png)] bg-cover bg-[50%_50%]"
      data-model-id="411:1119"
    >
      <Frame20Wrapper />
      <Frame3 />
      <Frame4 />
      <FooterInstanceWrapper />
    </div>
  );
};
