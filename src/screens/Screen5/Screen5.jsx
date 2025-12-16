import React from "react";
import { Header } from "../../components/Header";
import { Footer2 } from "./sections/Footer2";
import { Frame10 } from "./sections/Frame10";
import { Frame11 } from "./sections/Frame11";

export const Screen5 = () => {
  return (
    <div
      className="flex flex-col items-center relative bg-[url(/img/27-background.png)] bg-repeat-y bg-[50%_0%] w-full min-h-screen"
      data-model-id="411:1117"
    >
      <Header className="sticky top-0 bg-black/80 backdrop-blur-md z-50 w-full" />
      <Frame10 />
      <Frame11 />
      <Footer2 />
    </div>
  );
};
