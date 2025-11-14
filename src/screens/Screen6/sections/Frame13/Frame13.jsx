import React from "react";
import { Group63 } from "../../../../components/Group63";
import { Group66 } from "../../../../components/Group66";

export const Frame13 = () => {
  return (
    <div className="relative self-stretch w-full h-[350.56px]">
      <div className="relative w-[1440px] h-[505px]">
        <Group63
          className="!absolute !left-0 !w-[1440px] !top-0"
          text="Gust Flow"
          text1="ゲストの流れ"
        />
        <Group66
          className="!h-[173px] !absolute !left-[151px] !top-[332px]"
          divClassName="!h-[18.30%]"
          elementClassName="!h-[48.40%] !top-[51.60%]"
          text="ようこそ、非日常の入り口へ。"
          text1={
            <>
              入店からショー後の余韻まで、迷わず楽しめる5つのステップをご用意しました。まずは一杯、心をほどき、光と音の世界へ。
              <br />
              最後の一瞬まで、美しい体験をナビゲートします。
            </>
          }
        />
      </div>
    </div>
  );
};
