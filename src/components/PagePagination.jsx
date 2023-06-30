import React from "react";

const PagePagination = ({ page, setPage, searchData }) => {
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <div aria-label="Page navigation example" className="cursor-pointer">
      <ul className="list-style-none flex justify-center justify-items-center text-center border-2">
        {page === 1 ? (
          <React.Fragment />
        ) : (
          <li
            className="relative block rounded  px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white 	w-24"
            onClick={() => {
              handlePrevious();
            }}
          >
            Previous
          </li>
        )}
        {searchData && searchData.length !== 0 ? (
          <li
            className="relative block rounded  px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white 	w-24	"
            onClick={() => {
              handleNext();
            }}
          >
            Next
          </li>
        ) : (
          <React.Fragment />
        )}
      </ul>
    </div>
  );
};

export default PagePagination;
