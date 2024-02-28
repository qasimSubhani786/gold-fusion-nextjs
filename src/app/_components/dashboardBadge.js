import React from "react";

export const DashboardBadge = ({
    name,
    amount,
    isLastIndex,
    isCurrency
}) => {
  return (
    <div className={`flex flex-1 flex-col h-32 justify-center items-center bg-white ${isLastIndex ? "mr-0" : "mr-4"} md:shadow-lg rounded-lg`}>
      <div className="flex flex-col justify-center pl-8 flex-1 w-full">
        <span className="text-gray-500 text-sm">{name}</span>
        <span className="text-3xl">{`${isCurrency ? "PKR " : ""}${isCurrency ? amount.toFixed(2) : amount}`}</span>
      </div>
      <div className=""></div>
    </div>
  );
};
