import React from "react";
import { useRouter } from 'next/navigation'

export const NavMenu = ({
    navigationItemsList,
    onClick
}) => {
    const router = useRouter()

    return (<div className="w-full h-12 border pl-6 pr-6 pt-0.5 pb-0.5 flex flex-row">
        {
            navigationItemsList && navigationItemsList.length > 0 && navigationItemsList.map(({name, icon, isActive, navigationUrl}, index) => {
                return <>
                    <div 
                        className={`h-full w-40 border rounded-md flex justify-center items-center mr-1 cursor-pointer ${isActive ? "bg-theme" : "bg-white"}`}
                        onClick={() => {
                            onClick(index)
                            router.push(navigationUrl, { scroll: false })
                        }}
                        key={index}>
                        <span>{icon}</span>
                        <span className={`${isActive ? "text-white" : "text-black"} `}>{name}</span>
                    </div>
                </>
            })
        }
    </div>)
}