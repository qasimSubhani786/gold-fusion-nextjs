import React, { useState } from "react";
import { fieldTypes } from "../_common";
import { StatusBadge } from "./statusBadge";
import { Pagination } from "./pagination";
import { MdMoreVert } from "react-icons/md";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export const CustomTable = ({ columns, keyField, data }) => {
  const renderIcons = () => {
    return;
  };

  const [paginationCount, setPaginationCount] = useState(
    5
    // Math.ceil(data.length / 10)
  );
  const [selectedPage, setSelectedPage] = useState(1);

  console.log("paginationCount : ", paginationCount);

  const onPageChange = () => {};

  return (
    <div className="flex flex-col bg-white h-full w-full mt-4 md:shadow-lg rounded-lg">
      {/* ===== Table Headers ===== */}
      <div className="flex flex-row w-full h-12">
        {columns &&
          columns.length > 0 &&
          columns.map((item) => {
            return (
              <span className="flex flex-1 justify-center items-center text-gray-500 text-sm">
                {item.text}
              </span>
            );
          })}
      </div>
      {/* ===== Table Rows ===== */}
      <div className="flex flex-1">
        <div className="flex flex-1 flex-col w-full">
          {data &&
            data.length > 0 &&
            data.map((item) => {
              return (
                <div className="flex flex-row h-16 mb-2">
                  {columns.map((itemData, index) => {
                    if (itemData.fieldType === fieldTypes.text) {
                      return (
                        <span className="flex flex-1 justify-center items-center text-sm line-clamp-2">
                          {item[`${itemData.dataField}`]}
                        </span>
                      );
                    } else if (itemData.fieldType === fieldTypes.status) {
                      return (
                        <div className="flex flex-1 justify-center items-center">
                          <StatusBadge status={item[`${itemData.dataField}`]} />
                        </div>
                      );
                    } else {
                      return (
                        <div className="flex flex-1 justify-center items-center">
                          <Dropdown placement="bottom-end">
                            <DropdownTrigger>
                            <div className="cursor-pointer">
                            <MdMoreVert />
                            </div>
                            
                            </DropdownTrigger>
                            <DropdownMenu
                              aria-label="User Actions"
                              variant="flat"
                              className="bg-background p-4"
                            >
                                <DropdownItem className="p-1">
                                    Edit
                                </DropdownItem>      
                                <DropdownItem className="p-1">
                                    Delete
                                </DropdownItem>                         
                            </DropdownMenu>
                          </Dropdown>

                          {/* {item[`${itemData.dataField}`].map((item) => {
                            return <MdMoreVert />

                          })} */}
                        </div>
                      );
                    }
                  })}
                </div>
              );
            })}
        </div>
      </div>
      {paginationCount > 1 && (
        <div className="h-20 w-full border flex justify-center items-center">
          <Pagination
            items={data.length} // 100
            currentPage={selectedPage} // 1
            pageSize={10} // 10
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
};
