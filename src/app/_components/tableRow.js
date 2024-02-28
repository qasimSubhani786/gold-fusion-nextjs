import React from "react";
import { StatusBadge } from "./statusBadge";

export const TableRow = ({ rowDataList }) => {
  return (
    <div className="flex flex-row w-full h-12">
      {rowDataList &&
        rowDataList.length > 0 &&
        rowDataList.map((item) => {
          if (item.status) {
            return (
              <div className="flex flex-1 justify-center items-center text-gray text-sm">
                <StatusBadge status={item.status} />
              </div>
            );
          } else {
            return (
              <span className="flex flex-1 justify-center items-center text-gray text-sm">
                {item.name}
              </span>
            );
          }
        })}
    </div>
  );
};
