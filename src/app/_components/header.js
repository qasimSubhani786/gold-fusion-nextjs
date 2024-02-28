import React from "react";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="w-full h-20 border flex items-center p-6">
      <Image
        src="/assets/login-logo.png"
        width={250}
        height={80}
        alt="Picture of the author"
      />
      <div className="flex flex-1" />
      <Image
        className="mr-8 cursor-pointer"
        src="/notifications.svg"
        width={20}
        height={20}
        alt="Picture of the author"
      />
      <Image
        className="rounded-full"
        width={40}
        height={40}
        src="/profile-dummy.svg"
      />
    </div>
  );
};
