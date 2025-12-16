import React from "react";
import { Header } from "../../components/Header";
import { Footer4 } from "./sections/Footer4";
import { Frame17 } from "./sections/Frame17";
import { Frame18 } from "./sections/Frame18";
import { Frame19 } from "./sections/Frame19";

export const Screen7 = () => {
  return (
    <div
      className="flex flex-col items-center relative overflow-hidden bg-[url(/img/27-background.png)] bg-repeat-y bg-[50%_0%] w-full min-h-screen"
      data-model-id="411:1123"
    >
      <Header className="sticky top-0 bg-black/80 backdrop-blur-md z-50 w-full" />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Footer4 />
    </div>
  );
};
