import React, { useEffect, useState } from "react";
import { DashboardBadge, TableHeader, TableRow } from "../../_components";
import Image from "next/image";
import {
  timePeriods,
  orderHeaders,
  dashboardBadges,
  statusEnums,
} from "@/app/_common";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { GrFormNextLink } from "react-icons/gr";

const columnSequence = [`Item`, `Order By`, `Company Name`, `Order Date`, `Urgency Level`, `Qty`, `Status`, `Actions`]

const Dashboard = () => {
  Chart.register(CategoryScale);
  const [selectedStartDate, setSelectedStartDate] = useState(`01/09/2023`);
  const [selectedEndDate, setSelectedEndDate] = useState(`27/09/2023`);
  const [timePeriodsList, setTimePeriodsList] = useState(timePeriods);
  const [selectedTimeperiod, setSelectedTimeperiod] = useState(0);

  useEffect(() => {
    const tempList = [];
    timePeriodsList.map((item, index) => {
      tempList.push({
        ...item,
        isActive: selectedTimeperiod == index,
      });
    });
    setTimePeriodsList(tempList);
  }, [selectedTimeperiod]);

  return (
    <div className="bg-background flex flex-col h-dvh pl-20 pr-20 pt-8 pb-8">
      <span className="text-2xl">Dashboard</span>

      {/* ===== Top Badges Section ===== */}

      <div className="flex flex-row mt-4 justify-between">
        {dashboardBadges &&
          dashboardBadges.map(({ name, amount, isCurrency }, index) => {
            return (
              <DashboardBadge
                name={name}
                amount={amount}
                isLastIndex={index == dashboardBadges.length - 1}
                isCurrency={isCurrency}
              />
            );
          })}
      </div>

      {/* ===== Chart Reports Section ===== */}

      <div className="flex mt-4 justify-end">
        <div className="flex flex-row h-12 border w-64 justify-center items-center cursor-pointer bg-white">
          <Image
            className="mr-4 cursor-pointer"
            src="/calendar.svg"
            width={20}
            height={20}
            alt="Picture of the author"
          />
          <span className="text-gray-500">{`${selectedStartDate} - ${selectedEndDate}`}</span>
        </div>
      </div>
      <div className="flex flex-row h-128 w-full mt-4">
        <div className="flex flex-1 flex-col bg-white rounded-lg mr-4 md:shadow-lg p-6">
          <div className="flex flex-row">
            <span className="text-gray-500 flex-1">Revenue</span>
            <div>
              {timePeriodsList.map((item, index) => {
                return (
                  <span
                    className={`cursor-pointer pl-4 pr-4 ${
                      item.isActive ? "text-theme" : "text-gray-500"
                    }`}
                    onClick={() => setSelectedTimeperiod(index)}
                  >
                    {item.name}
                  </span>
                );
              })}
            </div>
          </div>
          <span className="text-3xl">PKR 1,165,200</span>
          <Line
            data={{
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              datasets: [
                {
                  label: "Revenue",
                  data: [100000, 50000, 300000, 320000, 275000, 600000, 150000],
                  backgroundColor: "#c4de2f",
                  borderColor: "#c4de2f",
                },
              ],
            }}
          />
        </div>

        <div className="flex flex-1 flex-col bg-white rounded-lg ml-4 md:shadow-lg p-6">
          <div>
            <span className="text-gray-500">Gold Price per 10 grams</span>
          </div>
          <span className="text-3xl">PKR 179,124.67</span>
          <Line
            data={{
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              datasets: [
                {
                  label: "Gold Price",
                  data: [
                    185000, 175000, 178000, 171000, 173000, 180000, 179000,
                  ],
                  backgroundColor: "#D8B14C",
                  borderColor: "#D8B14C",
                },
              ],
            }}
          />
        </div>
      </div>

      {/* ===== Orders List Section ===== */}

      <div className="mt-4 flex flex-row justify-between">
        <span className="text-2xl">Your Orders</span>
        <div className="bg-white flex flex-row w-48 border rounded-lg h-8 justify-center items-center cursor-pointer">
          <span className="text-gray-500 mr-4">View All Orders</span>
          <GrFormNextLink />
        </div>
      </div>

      <div className="w-full h-96 bg-white mt-4 mb-8 rounded-lg border md:shadow-lg">
        <TableHeader headersList={columnSequence || []} />
        <TableRow
          rowDataList={[
            { name: "Ring" },
            { name: "Zubair" },
            { name: "Zubair Jewellers" },
            { name: "27/09/2024" },
            { name: "Urgent" },
            { name: "5" },
            { status: statusEnums.pending },
            { name: "Umer" },
          ]}
        />
        <TableRow
          rowDataList={[
            { name: "Necklace" },
            { name: "Qasim" },
            { name: "Qasim Jewellers" },
            { name: "27/09/2024" },
            { name: "Normal" },
            { name: "8" },
            { status: statusEnums.processing },
            { name: "Umer" },
          ]}
        />
        <TableRow
          rowDataList={[
            { name: "Ring" },
            { name: "Hamza" },
            { name: "Hamza Jewellers" },
            { name: "27/09/2024" },
            { name: "Urgent" },
            { name: "9" },
            { status: statusEnums.complete },
            { name: "Umer" },
          ]}
        />
      </div>
    </div>
  );
};

export default Dashboard;
