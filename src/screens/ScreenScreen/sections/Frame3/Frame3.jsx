import React, { useState } from "react";
import { Group63 } from "../../../../components/Group63";
import { Group66 } from "../../../../components/Group66";
import { Group68 } from "../../../../components/Group68";
import { Group76 } from "../../../../components/Group76";
import { Group81 } from "../../../../components/Group81";

export const Frame3 = () => {
  const [formData, setFormData] = useState({
    name: "高橋 進",
    email: "",
    phone: "",
    inquiryType: "work",
    content: "",
    privacyAgreed: false,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.privacyAgreed) {
      alert("プライバシーポリシーに同意してください");
      return;
    }
    console.log("Form submitted:", formData);
    // ここで実際の送信処理を実装
    alert("お問い合わせを送信しました");
  };

  return (
    <div className="relative w-[1440px] h-[1980px]">
      <div className="absolute top-[1808px] left-[535px] w-[370px] h-[172px] flex">
        <div className="w-[370px] h-[172px] flex flex-col gap-[15px]">
          <div className="flex w-[370px] h-[66px] relative flex-col items-center gap-[15px]">
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <label className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] rounded-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.privacyAgreed}
                  onChange={(e) => handleInputChange("privacyAgreed", e.target.checked)}
                  className="sr-only"
                />
                <div className={`relative w-5 h-5 border border-solid border-[#06baa5] ${formData.privacyAgreed ? 'bg-[#06baa5]' : 'bg-[#081e15]'}`}>
                  {formData.privacyAgreed && (
                    <img
                      className="absolute top-px left-1 w-[19px] h-[15px]"
                      alt="Icon"
                      src="/img/icon.png"
                    />
                  )}
                </div>

                <div className="relative w-fit mt-[-1.00px] [font-family:'Yu_Mincho-Demibold',Helvetica] font-normal text-white text-[17px] tracking-[0] leading-[normal]">
                  「プライバシーポリシー」に同意する
                </div>
              </label>
            </div>

            <div className="relative self-stretch [font-family:'Yu_Mincho-Regular',Helvetica] font-normal text-[#06baa5] text-[15px] text-center tracking-[0] leading-[normal] underline">
              「プライバシーポリシー」はこちら
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="inline-flex ml-[120px] w-[130px] h-14 relative items-center justify-center gap-2.5 px-[25px] py-3 bg-white rounded-[3px] cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <div className="relative w-fit mt-[-1.00px] [font-family:'Yu_Mincho-Demibold',Helvetica] font-normal text-[#081e15] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              送信する
            </div>
          </button>
        </div>
      </div>

      <div className="absolute top-[600px] left-[190px] h-[929px] flex items-start min-w-[1060px]">
        <div className="flex items-start min-w-[1060px]">
          <div className="flex items-start min-w-[1060px]">
            <div className="flex items-start min-w-[1060px]">
              <div className="flex items-start min-w-[1060px]">
                <div className="flex items-start min-w-[1060px]">
                  <div className="flex items-start min-w-[1060px]">
                    <div className="w-[1060px] h-[929px] flex">
                      <div className="w-[1060px] flex">
                        <div className="flex w-[1060px] h-[928.55px] relative flex-col items-start">
                          <div className="relative w-[1060px] h-[704.55px]">
                            <div className="flex flex-col w-[1060px] items-start gap-[26px] relative">
                              <Group68
                                className="!self-stretch !h-[99px] ![display:unset] !left-[unset] !w-full !top-[unset]"
                                frameClassName="!h-[unset]"
                                text="お名前"
                                text1={formData.name}
                                value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                              />
                              <Group68
                                className="!self-stretch !h-[99px] ![display:unset] !left-[unset] !w-full !top-[unset]"
                                divClassName="!w-[19.68%]"
                                frameClassName="!h-[unset]"
                                groupClassName="!w-[204px]"
                                text="メールアドレス"
                                text1={formData.email}
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                placeholder="example@example.com"
                              />
                              <Group68
                                className="!self-stretch !h-[99px] ![display:unset] !left-[unset] !w-full !top-[unset]"
                                divClassName="!w-[11.58%]"
                                frameClassName="!h-[unset]"
                                groupClassName="!w-[150px]"
                                text="電話番号"
                                text1={formData.phone}
                                value={formData.phone}
                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                placeholder="000-0000-0000"
                              />
                              <Group81
                                className="!h-[79.55px]"
                                groupClassName="!mr-[-20.00px]"
                                text="お問い合せ種別"
                                value={formData.inquiryType}
                                onChange={(value) => handleInputChange("inquiryType", value)}
                              />
                              <Group68
                                className="!self-stretch !h-[99px] ![display:unset] !left-[unset] !w-full !top-[unset]"
                                hasFrame={false}
                              />
                              <Group68
                                className="!self-stretch !h-[99px] ![display:unset] !left-[unset] !w-full !top-[unset]"
                                hasFrame={false}
                              />
                            </div>
                          </div>

                          <Group76
                            className="!self-stretch !mt-[-125px] !left-[unset] !w-full !top-[unset]"
                            groupClassName="!mr-[-20.00px]"
                            text="お問い合せ内容"
                            value={formData.content}
                            onChange={(e) => handleInputChange("content", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-[1440px] h-[516px] flex flex-col gap-[1.4px]">
        <Group63
          className="!h-[350.56px] !w-[1440px]"
          text="Contact"
          text1="お問い合わせ"
        />
        <div className="ml-[151px] w-[1138px] flex">
          <Group66
            className="!h-[163.73px] ![position:unset] !left-[unset] !top-[unset]"
            divClassName="!left-[31.97%] !w-[35.77%]"
            elementClassName="!w-[99.62%]"
            groupClassName="!mr-[4.13%] !ml-[4.48%] !w-[1040px]"
            text="あなたの声を、私たちに。"
            text1={
              <>
                ご予約・撮影・コラボのご相談など、どんな内容でもお気軽にお問い合わせください。 2〜3営業日以内に、担当者よりメールにてご返信させていただきます。
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};
