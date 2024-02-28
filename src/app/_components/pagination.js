import React from "react";

export const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize);

  console.log('PageCount : ', pagesCount)

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);


  return (
    <div>
      <ul className='pl-4 pr-4 flex flex-row'>
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage ? 'text-theme m-2 cursor-pointer' : 'text-black m-2 cursor-pointer'
            }
          >
            <a className={''} onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
