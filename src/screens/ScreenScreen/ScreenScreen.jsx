import React from "react";
import { Header } from "../../components/Header";
import { FooterInstanceWrapper } from "./sections/FooterInstanceWrapper";
import { Frame3 } from "./sections/Frame3";
import { Frame4 } from "./sections/Frame4";

export const ScreenScreen = () => {
  return (
    <div
      className="flex flex-col items-center relative bg-transparent w-full min-h-screen"
      data-model-id="411:1119"
    >
      <Header className="sticky top-0 bg-black/80 backdrop-blur-md z-50 w-full" />
      <Frame3 />
      <Frame4 />
      <FooterInstanceWrapper />
    </div>
  );
};
