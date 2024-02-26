import Image from "next/image";
import React from "react";

export const InputField = () => {
    return (<div className="w-96 h-14 mt-2 border border-black flex flex-row items-center">
        <div className="w-14 h-14 flex justify-center items-center">
            <Image src='/mail-icon.svg' width={20} height={20}/>
        </div>
        <input className="flex-1 h-full" placeholder='Enter your email' />
    </div>)
}