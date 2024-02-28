import React from "react";

export const GenericButton = ({ buttonTitle, onClick }) => {
  return (
    <div
      className="h-12 w-56 border bg-theme flex justify-center items-center rounded cursor-pointer"
      onClick={onClick}
    >
      <span className="text-white">{buttonTitle}</span>
    </div>
  );
};
