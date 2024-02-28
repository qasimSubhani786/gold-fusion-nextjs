import React from "react";
import Image from "next/image";

export const DateFilterView = ({
    selectedStartDate,
    selectedEndDate,
    className
}) => {
  return (
    <div className={`flex flex-row h-12 border w-64 justify-center items-center cursor-pointer bg-white ${className}`}>
      <Image
        className="mr-4 cursor-pointer"
        src="/calendar.svg"
        width={20}
        height={20}
        alt="Picture of the author"
      />
      <span className="text-gray-500">{`${selectedStartDate} - ${selectedEndDate}`}</span>
    </div>
  );
};
