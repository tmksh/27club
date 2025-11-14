import React from "react";
import { Group63 } from "../../../../components/Group63";
import { Group66 } from "../../../../components/Group66";

export const Frame6 = () => {
  return (
    <div className="relative w-[1440px] h-[633.73px]">
      <Group63
        className="!absolute !left-0 !w-[1440px] !top-0"
        text="Party Plans"
        text1="パーティープラン"
      />
      <Group66
        className="!absolute !left-[153px] !top-[351px]"
        divClassName="!left-[16.61%] !w-[66.52%]"
        elementClassName="!w-full"
        groupClassName="!mr-[-1.41%] !ml-[-0.97%] !w-[1165px]"
        text="NEW PLAN 登場。集まる理由が、もっと洗練される。"
        text1={
          <>
            ベーシックからプレミアムまで、必要なものを過不足なくセット。予約も相談もスマートに完結。 歓送迎会・バースデー・企業貸切まで、すべてこのページからはじめられます。
          </>
        }
      />
    </div>
  );
};
