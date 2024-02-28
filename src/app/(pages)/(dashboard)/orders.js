import { fieldTypes, orderHeaders, statusEnums } from "@/app/_common";
import {
  CustomTable,
  DateFilterView,
  GenericButton,
  TableHeader,
} from "@/app/_components";
import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";

const Orders = () => {
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
  const columnSequence = [
    `Order No`,
    `Order By`,
    `Description`,
    `Qty`,
    `Created Date`,
    `Delivery Date`,
    `Steps`,
    `Status`,
    `Actions`,
  ];
  const orderColumns = [
    {
      dataField: `id`,
      text: `Order No`,
      fieldType: fieldTypes.text,
    },
    {
      dataField: `orderBy`,
      text: `Order By`,
      fieldType: fieldTypes.text,
    },
    {
      dataField: `description`,
      text: `Description`,
      fieldType: fieldTypes.text,
    },
    {
      dataField: `qty`,
      text: `Qty`,
      fieldType: fieldTypes.text,
    },
    {
      dataField: `createdDate`,
      text: `Created Date`,
      fieldType: fieldTypes.text,
    },
    {
      dataField: `deliveryDate`,
      text: `Delivery Date`,
      fieldType: fieldTypes.text,
    },
    {
      dataField: `currentStep`,
      text: `Step`,
      fieldType: fieldTypes.text,
    },
    {
      dataField: `status`,
      text: `Status`,
      fieldType: fieldTypes.status,
    },
    {
      dataField: `actions`,
      text: `Actions`,
      fieldType: fieldTypes.action,
    },
  ];

  return (
    <div className="bg-background flex flex-col h-dvh pl-20 pr-20 pt-8 pb-8">
      <div className="flex items-center">
        <span className="text-2xl flex-1">{`Orders (${dataList.length})`}</span>
        <DateFilterView
          className={`mr-2`}
          selectedStartDate={`21/02/2024`}
          selectedEndDate={`29/02/2024`}
        />
        <GenericButton buttonTitle={"+ Create New Order"} />
      </div>
      <CustomTable keyField={"id"} columns={orderColumns} data={dataList} />
    </div>
  );
};

export default Orders;
