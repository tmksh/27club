import React from "react";
import { Header } from "../../components/Header";
import { FeelingSection } from "./sections/FeelingSection";
import { FooterWrapper } from "./sections/FooterWrapper";
import { Frame1 } from "./sections/Frame1";
import { Frame2 } from "./sections/Frame2";
import { FrameInstanceWrapper } from "./sections/FrameInstanceWrapper";

export const Screen = () => {
  return (
    <div
      className="overflow-hidden bg-[url(/img/27-background.png)] bg-repeat-y bg-[50%_0%] w-full min-h-screen flex flex-col"
      data-model-id="487:1261"
    >
      <Header className="sticky top-0 bg-black/80 backdrop-blur-md z-50 w-full" />
      <Frame1 />
      <FeelingSection />
      <Frame2 />
      <FrameInstanceWrapper />
      <FooterWrapper />
    </div>
  );
};
