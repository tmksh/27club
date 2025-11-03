import React from "react";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { Footer } from "./sections/Footer";
import { Frame } from "./sections/Frame";
import { Frame650Wrapper } from "./sections/Frame650Wrapper";
import { FrameWrapper } from "./sections/FrameWrapper";
import { GroupWrapper } from "./sections/GroupWrapper";
import { HeroSection } from "./sections/HeroSection";
import { SectionComponentNode } from "./sections/SectionComponentNode";

export const Top = () => {
  return (
    <div
      className="flex flex-col h-[10962px] items-center gap-[175px] relative overflow-hidden"
      data-model-id="385:1682"
    >
      <img
        className="relative w-[1440px] h-[856px]"
        alt="Frame"
        src="/img/frame-31.png"
      />

      <HeroSection />
      <Frame />
      <GroupWrapper />
      <FrameWrapper />
      <DivWrapper />
      <Div />
      <SectionComponentNode />
      <Frame650Wrapper />
      <Footer />
    </div>
  );
};
