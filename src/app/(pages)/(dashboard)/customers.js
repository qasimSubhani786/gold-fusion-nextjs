import { statusEnums } from "@/app/_common";
import { DateFilterView, GenericButton } from "@/app/_components";
import React, { useState } from "react";

const Customers = () => {
  const [dataList, setDataList] = useState([
    {
      id: "0012",
      orderBy: "Usman",
      description: "Ring with",
      qty: "10",
      createdDate: "21/02/2024",
      deliveryDate: "10/03/2024",
      currentStep: "N/A",
      status: statusEnums.pending,
      actions: ["edit", "delete"],
    },
    {
      id: "0012",
      orderBy: "Usman",
      description:
        "Ring with further details attach with the image received. Thank",
      qty: "10",
      createdDate: "21/02/2024",
      deliveryDate: "10/03/2024",
      currentStep: "N/A",
      status: statusEnums.processing,
      actions: ["edit", "delete"],
    },
    {
      id: "0012",
      orderBy: "Usman",
      description: "Ring with",
      qty: "10",
      createdDate: "21/02/2024",
      deliveryDate: "10/03/2024",
      currentStep: "N/A",
      status: statusEnums.complete,
      actions: ["edit", "delete"],
    },
    {
      id: "0012",
      orderBy: "Usman",
      description: "Ring with",
      qty: "10",
      createdDate: "21/02/2024",
      deliveryDate: "10/03/2024",
      currentStep: "N/A",
      status: statusEnums.complete,
      actions: ["edit", "delete"],
    },
    {
      id: "0012",
      orderBy: "Usman",
      description: "Ring with",
      qty: "10",
      createdDate: "21/02/2024",
      deliveryDate: "10/03/2024",
      currentStep: "N/A",
      status: statusEnums.complete,
      actions: ["edit", "delete"],
    },
    {
      id: "0012",
      orderBy: "Usman",
      description: "Ring with",
      qty: "10",
      createdDate: "21/02/2024",
      deliveryDate: "10/03/2024",
      currentStep: "N/A",
      status: statusEnums.pending,
      actions: ["edit", "delete"],
    },
    {
      id: "0012",
      orderBy: "Usman",
      description:
        "Ring with further details attach with the image received. Thank",
      qty: "10",
      createdDate: "21/02/2024",
      deliveryDate: "10/03/2024",
      currentStep: "N/A",
      status: statusEnums.processing,
      actions: ["edit", "delete"],
    },
    {
      id: "0012",
      orderBy: "Usman",
      description: "Ring with",
      qty: "10",
      createdDate: "21/02/2024",
      deliveryDate: "10/03/2024",
      currentStep: "N/A",
      status: statusEnums.complete,
      actions: ["edit", "delete"],
    },
    {
      id: "0012",
      orderBy: "Usman",
      description: "Ring with",
      qty: "10",
      createdDate: "21/02/2024",
      deliveryDate: "10/03/2024",
      currentStep: "N/A",
      status: statusEnums.complete,
      actions: ["edit", "delete"],
    },
    {
      id: "0012",
      orderBy: "Usman",
      description: "Ring with",
      qty: "10",
      createdDate: "21/02/2024",
      deliveryDate: "10/03/2024",
      currentStep: "N/A",
      status: statusEnums.complete,
      actions: ["edit", "delete"],
    },
  ]);
  return (
    <div className="bg-background flex flex-col h-dvh pl-20 pr-20 pt-8 pb-8">
      <div className="flex items-center">
        <span className="text-2xl flex-1">{`Customers (${
          dataList?.length || 0
        })`}</span>
        <DateFilterView
          className={`mr-2`}
          selectedStartDate={`21/02/2024`}
          selectedEndDate={`29/02/2024`}
        />
        <GenericButton buttonTitle={"+ Add Customer"} />
      </div>
    </div>
  );
};

export default Customers;
