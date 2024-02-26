import React from "react";

export const NavMenu = ({
    navigationItemsList
}) => {
    return (<div className="w-full h-12 border pl-6 pr-6 pt-0.5 pb-0.5 flex flex-row">
        {
            navigationItemsList && navigationItemsList.length > 0 && navigationItemsList.map((item, index) => {
                return <>
                    <div className={`h-full w-40 border rounded-md flex justify-center items-center mr-1 cursor-pointer ${item.isActive ? "bg-theme" : "bg-white"}`}
                        key={index}>
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                    </div>
                </>
            })
        }
    </div>)
}