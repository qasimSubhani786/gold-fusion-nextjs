import { orderHeaders } from "@/app/_common";
import { DateFilterView, GenericButton, TableHeader } from "@/app/_components";
import React, { useState } from "react";

const Orders = () => {
  const [ordersCount, setOrdersCount] = useState(10);
  const columnSequence = [`Order No`, `Order By`, `Description`, `Qty`, `Created Date`, `Delivery Date`, `Steps`, `Status`, `Actions`]

  return (
    <div className="bg-background flex flex-col h-dvh pl-20 pr-20 pt-8 pb-8">
      <div className="flex items-center">
        <span className="text-2xl flex-1">{`Orders (${ordersCount})`}</span>
        <DateFilterView
          className={`mr-2`}
          selectedStartDate={`21/02/2024`}
          selectedEndDate={`29/02/2024`}
        />
        <GenericButton buttonTitle={"+ Create New Order"} />
      </div>

      <div className="bg-white h-full w-full mt-4 md:shadow-lg rounded-lg">
        <TableHeader headersList={columnSequence || []} />
      </div>
    </div>
  );
};

export default Orders;
