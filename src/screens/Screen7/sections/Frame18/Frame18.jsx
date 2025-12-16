import React, { useState } from "react";
import { TalentPc } from "../../../../components/TalentPc";

export const Frame18 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  // 全カードデータ（36枚分）
  const allCards = [
    { id: 1, s: "/img/s-16646146-0-1-9.png", to: "/frame-695" },
    { id: 2, s: "/img/s-16646146-0-2.png" },
    { id: 3, s: "/img/s-16646146-0-2.png" },
    { id: 4, s: "/img/s-16646146-0-2.png" },
    { id: 5, s: "/img/s-16646146-0-1-9.png" },
    { id: 6, s: "/img/s-16646146-0-2.png" },
    { id: 7, s: "/img/s-16646146-0-2.png" },
    { id: 8, s: "/img/s-16646146-0-2.png" },
    { id: 9, s: "/img/s-16646146-0-1-9.png" },
    { id: 10, s: "/img/s-16646146-0-2.png" },
    { id: 11, s: "/img/s-16646146-0-2.png" },
    { id: 12, s: "/img/s-16646146-0-2.png" },
    // ページ2
    { id: 13, s: "/img/s-16646146-0-1-9.png" },
    { id: 14, s: "/img/s-16646146-0-2.png" },
    { id: 15, s: "/img/s-16646146-0-2.png" },
    { id: 16, s: "/img/s-16646146-0-2.png" },
    { id: 17, s: "/img/s-16646146-0-1-9.png" },
    { id: 18, s: "/img/s-16646146-0-2.png" },
    { id: 19, s: "/img/s-16646146-0-2.png" },
    { id: 20, s: "/img/s-16646146-0-2.png" },
    { id: 21, s: "/img/s-16646146-0-1-9.png" },
    { id: 22, s: "/img/s-16646146-0-2.png" },
    { id: 23, s: "/img/s-16646146-0-2.png" },
    { id: 24, s: "/img/s-16646146-0-2.png" },
    // ページ3
    { id: 25, s: "/img/s-16646146-0-1-9.png" },
    { id: 26, s: "/img/s-16646146-0-2.png" },
    { id: 27, s: "/img/s-16646146-0-2.png" },
    { id: 28, s: "/img/s-16646146-0-2.png" },
    { id: 29, s: "/img/s-16646146-0-1-9.png" },
    { id: 30, s: "/img/s-16646146-0-2.png" },
    { id: 31, s: "/img/s-16646146-0-2.png" },
    { id: 32, s: "/img/s-16646146-0-2.png" },
    { id: 33, s: "/img/s-16646146-0-1-9.png" },
    { id: 34, s: "/img/s-16646146-0-2.png" },
    { id: 35, s: "/img/s-16646146-0-2.png" },
    { id: 36, s: "/img/s-16646146-0-2.png" },
  ];

  // ページあたりのカード数（モバイルでは6枚、PCでは12枚）
  const cardsPerPage = 12;

  // 現在のページに表示するカードを取得
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = allCards.slice(startIndex, endIndex);

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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {currentCards.map((card) => (
            <div key={card.id} className="w-full">
              <TalentPc
                s={card.s}
                to={card.to}
              />
            </div>
          ))}
        </div>

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
            {[1, 2, 3].map((page) => (
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
