import React from "react";
import Image from 'next/image'

export const Header = () => {
    return (<div className="w-full h-20 border flex items-center p-6">
        <Image
            src="/assets/login-logo.png"
            width={250}
            height={80}
            alt="Picture of the author"
        />
        <div className="flex flex-1"/>
        <span>O</span>
        <Image width={50} height={50} src='/vercel.svg' />
    </div>)
}