"use client";

import { forwardRef, useCallback, useState } from "react";

export interface IPaginationProps {
  total: number;
  current?: number;
  onChange?: (page: number) => void;
}
const LIMIT = 5;
const RANGE = 2;
export const Pagination = forwardRef(function PaginationRef(
  props: IPaginationProps,
  ref
) {
  const { total, current = 1, onChange } = props;
  const [activePage, setActivePage] = useState<number>(current);
  const [listPage, setListPage] = useState<number[]>(
    Array.from({ length: total }, (_, i) => i + 1)
  );

  const handleOnChange = useCallback(
    (page: number) => {
      setActivePage(page);
      onChange?.(page);
    },
    [onChange]
  );
  const renderPagination = () => {
    if (total < LIMIT + RANGE) {
      return listPage.map((page, index) => {
        return (
          <div
            onClick={() => handleOnChange(page)}
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
      const lastPage = listPage[listPage.length - 1];
      if (activePage - RANGE - 1 > listPage[0]) {
        pages = [
          ...pages,
          "...",
          ...listPage.slice(
            activePage + RANGE >= total
              ? total - LIMIT - 1
              : activePage - RANGE - 1,
            activePage + RANGE >= total ? total - 1 : activePage + RANGE
          ),
        ];
        if (activePage > lastPage - LIMIT + 1) {
          pages = [...pages];
        } else {
          pages = [...pages, "..."];
        }
      } else {
        const endFlag = LIMIT > activePage + RANGE ? LIMIT : activePage + RANGE;
        pages = [...pages, ...listPage.slice(1, endFlag), "..."];
      }
      pages = [...pages, lastPage];

      return pages.map((page, index) => {
        return (
          <div
            onClick={() => typeof page == "number" && handleOnChange(page)}
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
  return <div className="flex flex-row">{renderPagination()}</div>;
});
