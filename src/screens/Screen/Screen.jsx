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
      className="overflow-hidden bg-transparent w-full min-h-screen flex flex-col relative z-0"
      data-model-id="487:1261"
    >
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header className="bg-transparent w-full" />
        </div>
        <Frame1 />
      </div>
      <FeelingSection />
      <Frame2 />
      <FrameInstanceWrapper />
      <FooterWrapper />
    </div>
  );
};
