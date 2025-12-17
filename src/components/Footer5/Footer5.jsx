/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ConcreteComponentNode } from "../ConcreteComponentNode";

export const Footer5 = ({
  className,
  concreteComponentNodeVector = "/img/vector-2.svg",
  concreteComponentNodeImg = "/img/vector-3.svg",
  concreteComponentNodeVector1 = "/img/vector.svg",
  concreteComponentNodeVector2 = "/img/vector-4.svg",
  concreteComponentNodeVector3 = "/img/vector-1.svg",
  concreteComponentNodeFooterClassName,
  concreteComponentNodeSocialIcons = "/img/social-icons.svg",
  to,
  to1,
  to2,
  to3,
  to4,
  to5,
}) => {
  return (
    <div className={`min-h-[400px] md:min-h-[584px] w-full flex mt-16 md:mt-24 ${className}`}>
      <ConcreteComponentNode
        className={concreteComponentNodeFooterClassName}
        divClassName="![white-space:unset]"
        elementClassName="!h-auto !w-[45px]"
        img={concreteComponentNodeVector3}
        imgClassName="!left-[4.16%]"
        leftSectionClassName="!h-auto"
        logoClassName="!flex-[unset] !flex !w-[45px]"
        socialIcons={concreteComponentNodeSocialIcons}
        text={
          <>
            〒160-0021
            <br />
            東京都新宿区歌舞伎町２丁目３６−３
            <br />
            新宿Acb会館 3階
          </>
        }
        text1="キャスト"
        text2="求人募集"
        text3="パーティープラン"
        text4="ゲストの流れ"
        text5="チップについて"
        text6="お問い合わせ"
        to={to3 || "/u12461u12515u12473u12488"}
        to1={to4 || "/u27714u20154"}
        to2={to2 || "/u12495u12442u12540u12486u12451u12540u12501u12442u12521u12531"}
        to3={to1 || "/u12465u12441u12473u12488u27969u12428"}
        to4={to || "/u12481u12483u12501u12442u12395u12388u12356u12390"}
        to5={to5 || "/u12467u12531u12479u12463u12488"}
        vector={concreteComponentNodeVector1}
        vector1={concreteComponentNodeVector}
        vector2={concreteComponentNodeImg}
        vector3={concreteComponentNodeVector2}
        vectorClassName="!left-[4.16%]"
        vectorClassNameOverride="!left-[4.16%]"
      />
    </div>
  );
};

Footer5.propTypes = {
  concreteComponentNodeVector: PropTypes.string,
  concreteComponentNodeImg: PropTypes.string,
  concreteComponentNodeVector1: PropTypes.string,
  concreteComponentNodeVector2: PropTypes.string,
  concreteComponentNodeVector3: PropTypes.string,
  concreteComponentNodeSocialIcons: PropTypes.string,
  to: PropTypes.string,
  to1: PropTypes.string,
  to2: PropTypes.string,
  to3: PropTypes.string,
  to4: PropTypes.string,
  to5: PropTypes.string,
};
