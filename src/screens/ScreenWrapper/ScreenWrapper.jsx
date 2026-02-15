import React from "react";
import { Header } from "../../components/Header";
import { Footer1 } from "./sections/Footer1";
import { Frame6 } from "./sections/Frame6";
import { Frame7 } from "./sections/Frame7";
import { Frame8 } from "./sections/Frame8";

export const ScreenWrapper = () => {
  return (
    <div
      className="flex flex-col items-center relative overflow-hidden bg-transparent w-full min-h-screen"
      data-model-id="411:1115"
    >
      <Header className="sticky top-0 bg-transparent z-50 w-full" />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Footer1 />
    </div>
  );
};
