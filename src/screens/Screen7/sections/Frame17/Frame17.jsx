import React from "react";
import { Group63 } from "../../../../components/Group63";
import { Group66 } from "../../../../components/Group66";

export const Frame17 = () => {
  return (
    <div className="relative w-[1440px] h-[608.29px] mx-auto">
      <div className="relative h-[446px]">
        <Group63
          className="!absolute !left-0 !w-[1440px] !top-0"
          text="Cast"
          text1="キャスト一覧"
        />
        <div className="absolute top-[283px] left-0 right-0 w-[1138px] h-[164px] flex justify-center mx-auto">
          <Group66
            className="!h-[163.73px] ![position:unset] !left-[unset] !top-[unset]"
            divClassName="!h-[15.15%] !left-[22.60%] !w-[54.49%]"
            elementClassName="!h-[59.63%] !w-[99.69%] !top-[40.37%]"
            groupClassName="!mr-[-7.47%] !ml-[-7.03%] !w-[1303px]"
            text="あなたを魅了するキャストたちを、ご紹介します。"
            text1={
              <>
                それぞれがこの空間を彩る表現者。
                <br />{" "}
                ダンサー・シンガー・エンターテイナー──唯一無二のパフォーマンスで、今夜のステージを創り上げます。
                <br />{" "}
                お気に入りのキャストや出演スケジュールなど、最新情報はこちらからご覧ください。
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};
