"use client";

import { useState } from "react";

export interface IPaginationProps {
  total: number;
  current?: number;
}
const LIMIT = 4;
const RANGE = 2;
export const Pagination = (props: IPaginationProps) => {
  const { total, current = 1 } = props;
  const [activePage, setActivePage] = useState<number>(current);
  const [listPage, setListPage] = useState<number[]>(
    Array.from({ length: total }, (_, i) => i + 1)
  );
  const renderPagination = () => {
    if (total <= LIMIT + RANGE) {
      return listPage.map((page, index) => {
        return (
          <div
            onClick={() => setActivePage(page)}
            className={`py-2 px-4 text-gray-400 rounded cursor-pointer hover:text-indigo-700 hover:bg-indigo-100 ${
              activePage === page && "bg-indigo-50 text-indigo-700"
            }`}
            key={index}
          >
            {page}
          </div>
        );
      });
    } else {
      let pages: any[] = [listPage[0]];
      let end = LIMIT + 1;
      let start = listPage.length - LIMIT - 1;
      const lastPage = listPage[listPage.length - 1];
      if (activePage - RANGE - 1 > listPage[0]) {
        pages = [
          ...pages,
          "...",
          // ...listPage.slice(activePage - RANGE - 1, activePage + RANGE),
        ];
        if (activePage + RANGE + 1 >= lastPage) {
          pages = [...pages, ...listPage.slice(start - 1, listPage.length)];
        } else {
          pages = [
            ...pages,
            ...listPage.slice(activePage - RANGE - 1, activePage + RANGE),
          ];
        }
      } else {
        const endFlag = end > activePage + RANGE ? end : activePage + RANGE;
        pages = [...pages, ...listPage.slice(1, endFlag)];
      }
      if (activePage + RANGE + 1 < lastPage) {
        pages = [...pages, "...", lastPage];
      }
      return pages.map((page, index) => {
        return (
          <div
            onClick={() => setActivePage(page)}
            className={`py-2 px-4 text-gray-400 rounded cursor-pointer hover:text-indigo-700 hover:bg-indigo-100 ${
              activePage === page && "bg-indigo-50 text-indigo-700"
            }`}
            key={index}
          >
            {page}
          </div>
        );
      });
    }
  };
  console.log("activePage", activePage);
  return <div className="flex flex-row">{renderPagination()}</div>;
};

// curent = 1, current + 4 =  5
// current = 4 , 5-4 < step

// first , [4- step -> 4 + step]
