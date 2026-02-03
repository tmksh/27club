import React, { useState, useEffect } from "react";
import { TalentPc } from "../../../../components/TalentPc";
import { castsAPI } from "../../../../lib/supabase";

export const Frame18 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [castData, setCastData] = useState([]);
  const [loading, setLoading] = useState(true);

  // キャストデータの読み込み
  useEffect(() => {
    const loadCasts = async () => {
      try {
        const data = await castsAPI.getAll();
        console.log('キャストページ - 取得したキャスト数:', data?.length, data);
        if (data && data.length > 0) {
          setCastData(data.map((cast) => ({
            id: cast.id,
            s: cast.profile_image_url || "/img/s-16646146-0-2.png",
            name: cast.name || "Cast",
            nameEn: cast.name_en || cast.name || "Cast",
            birthday: cast.birthday || "",
            description: cast.description || "情報準備中",
            instagramUrl: cast.instagram_url || "",
            imagePositionY: cast.image_position_y ?? 0,
          })));
        }
      } catch (error) {
        console.error('キャストの取得に失敗しました:', error);
      } finally {
        setLoading(false);
      }
    };
    loadCasts();
  }, []);

  // ページあたりのカード数（モバイルでは6枚、PCでは12枚）
  const cardsPerPage = 12;
  const totalPages = Math.max(1, Math.ceil(castData.length / cardsPerPage));

  // 現在のページに表示するカードを取得
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = castData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // ページ変更時にトップにスクロール
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-16">
      <div className="max-w-[1300px] mx-auto">
        {/* カードグリッド */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-white text-lg">読み込み中...</div>
          </div>
        ) : castData.length === 0 ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-white text-lg">キャスト情報がありません</div>
          </div>
        ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {currentCards.map((card) => (
            <div key={card.id} className="w-full">
              <TalentPc
                id={card.id}
                s={card.s}
                name={card.name}
                nameEn={card.nameEn}
                birthday={card.birthday}
                description={card.description}
                instagramUrl={card.instagramUrl}
                imagePositionY={card.imagePositionY}
              />
            </div>
          ))}
        </div>
        )}

        {/* ページネーション */}
        <div className="flex items-center justify-center gap-3 md:gap-5">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`relative w-8 md:w-14 h-3 md:h-4 border-none bg-transparent p-0 cursor-pointer transition-opacity ${
              currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-70'
            }`}
          >
            <img
              className="w-full h-full object-contain"
              alt="Previous"
              src="/img/arrow-2.svg"
            />
          </button>

          <div className="inline-flex items-center gap-2 md:gap-5">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`relative w-8 h-8 md:w-12 md:h-12 border-none bg-transparent p-0 cursor-pointer transition-all ${
                  currentPage === page ? '' : 'hover:opacity-80'
                }`}
              >
                <div
                  className={`w-full h-full rounded-md border-2 border-solid flex items-center justify-center ${
                    currentPage === page
                      ? 'bg-[#1e4a46] border-[#1e4a46]'
                      : 'bg-white border-[#1e4a46]'
                  }`}
                >
                  <span
                    className={`[font-family:'Noto_Serif_JP',Helvetica] font-bold text-sm md:text-xl ${
                      currentPage === page ? 'text-white' : 'text-black'
                    }`}
                  >
                    {page}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`relative w-8 md:w-14 h-3 md:h-4 border-none bg-transparent p-0 cursor-pointer transition-opacity ${
              currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-70'
            }`}
          >
            <img
              className="w-full h-full object-contain"
              alt="Next"
              src="/img/arrow-1.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
