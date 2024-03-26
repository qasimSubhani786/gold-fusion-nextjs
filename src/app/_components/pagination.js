import React from "react";
import Pagination from "react-bootstrap/Pagination";

export const PaginationLayout = ({
  items,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const pagesCount = Math.ceil(items / pageSize);

  if (pagesCount === 1) return null;
  const totalPages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  console.log("Pages : ", totalPages);

  const generatePageNumbers = (currentPage) => {
    const visiblePages = 5; // Number of visible page numbers
    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    if (endPage - startPage + 1 < visiblePages) {
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="flex flex-row">
      <Pagination onClick={(val) => {
        console.log('VAL : ',val)
      }}>
        <Pagination.First />
        <Pagination.Prev />

        {
          totalPages.map((item) => {
            return 
          })
        }


        <Pagination.Item value={1}>{1}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item onClick={(value) => {
          console.log('Value : ',value)
        }}>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
};
