import React from "react";

export const TableHeader = ({ headersList }) => {
  return (
    <div className="flex flex-row w-full h-12">
      {headersList &&
        headersList.length > 0 &&
        headersList.map((item) => {
          return <span className="flex flex-1 justify-center items-center text-gray-500 text-sm" >{item}</span>;
        })}
    </div>
  );
};
