import React, { useState } from "react";
import { TalentPc } from "../../../../components/TalentPc";

export const Frame18 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  const cardsPerPage = 12;

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

  // 現在のページに表示するカードを取得
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = allCards.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-col w-[1440px] h-[1406.42px] items-center gap-[84px] relative mx-auto">
      <div className="grid grid-cols-4 grid-rows-3 h-[1199px] gap-[49px_35px] absolute top-0 left-0 right-0 w-[1273px] mx-auto">
        {currentCards.map((card, index) => {
          const row = Math.floor(index / 4) + 1;
          const col = (index % 4) + 1;
          const rowClass = row === 1 ? '!row-[1_/_2]' : row === 2 ? '!row-[2_/_3]' : '!row-[3_/_4]';
          const colClass = col === 1 ? '!col-[1_/_2]' : col === 2 ? '!col-[2_/_3]' : col === 3 ? '!col-[3_/_4]' : '!col-[4_/_5]';
          return (
            <TalentPc
              key={card.id}
              className={`!h-[366.67px] ${rowClass} !left-[unset] ${colClass} !top-[unset]`}
              s={card.s}
              to={card.to}
            />
          );
        })}
      </div>

      <div className="absolute top-[1250px] left-0 right-0 flex items-center justify-center gap-5">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`ml-[-1.00px] relative w-[54px] h-[14.73px] border-none bg-transparent p-0 cursor-pointer ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'
          }`}
        >
          <img
            className="w-full h-full"
            alt="Previous"
            src="/img/arrow-2.svg"
          />
        </button>

        <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`relative w-[52px] h-[50px] border-none bg-transparent p-0 cursor-pointer ${
                currentPage === page ? '' : 'hover:opacity-80'
              }`}
            >
              <div
                className={`absolute top-0 left-0 w-[50px] h-[50px] rounded-[5px] border-2 border-solid ${
                  currentPage === page
                    ? 'bg-[#1e4a46] border-[#1e4a46]'
                    : 'bg-white border-[#1e4a46]'
                }`}
              />
              <div
                className={`absolute top-[13px] left-5 [font-family:'Noto_Serif_JP',Helvetica] font-bold text-xl tracking-[0] leading-[normal] whitespace-nowrap ${
                  currentPage === page ? 'text-white' : 'text-black'
                }`}
              >
                {page}
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`mr-[-1.00px] relative w-[54px] h-[14.73px] border-none bg-transparent p-0 cursor-pointer ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'
          }`}
        >
          <img
            className="w-full h-full"
            alt="Next"
            src="/img/arrow-1.svg"
          />
        </button>
      </div>
    </div>
  );
};
