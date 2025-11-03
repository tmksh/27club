import React from "react";
import { FeelingSection } from "./sections/FeelingSection";
import { FooterWrapper } from "./sections/FooterWrapper";
import { Frame1 } from "./sections/Frame1";
import { Frame2 } from "./sections/Frame2";
import { FrameInstanceWrapper } from "./sections/FrameInstanceWrapper";
import { NavigationWrapper } from "./sections/NavigationWrapper";

export const Screen = () => {
  return (
    <div
      className="overflow-hidden bg-[url(/img/image.png)] bg-cover bg-[50%_50%] w-full min-w-[1440px] min-h-[2838px] flex flex-col"
      data-model-id="487:1261"
    >
      <NavigationWrapper />
      <Frame1 />
      <FeelingSection />
      <Frame2 />
      <FrameInstanceWrapper />
      <FooterWrapper />
    </div>
  );
};
