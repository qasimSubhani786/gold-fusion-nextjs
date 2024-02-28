import React from "react";
import { statusEnums } from "../_common";

export const StatusBadge = ({ status }) => {
  let selectedBgColor = `bg-${status.toLowerCase().trim()}`;
  let selectedTextColor = `text-${status.toLowerCase().trim()}`;

  switch (status) {
    case statusEnums.pending:
      selectedBgColor = `bg-pendingBackground`;
      selectedTextColor = `text-pending`
      break;
    case statusEnums.processing:
      selectedBgColor = `bg-processingBackground`;
      selectedTextColor = `text-processing`;
      break;
    case statusEnums.complete:
      selectedBgColor = `bg-completeBackground`;
      selectedTextColor = `text-complete`;
      break;
  }

  return (
    <div
      className={`flex justify-center items-center h-10 w-48 ${selectedBgColor} rounded-lg`}>
      <span className={`${selectedTextColor}`}>{status}</span>
    </div>
  );
};
