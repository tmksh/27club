import React from "react";
import { Header } from "../../components/Header";
import { Footer3 } from "./sections/Footer3";
import { Frame13 } from "./sections/Frame13";
import { Frame14 } from "./sections/Frame14";
import { Frame15 } from "./sections/Frame15";

export const Screen6 = () => {
  return (
    <div
      className="flex flex-col items-center relative overflow-hidden bg-transparent w-full min-h-screen"
      data-model-id="411:1121"
    >
      <Header className="sticky top-0 bg-black/80 backdrop-blur-md z-50 w-full" />
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Footer3 />
    </div>
  );
};
