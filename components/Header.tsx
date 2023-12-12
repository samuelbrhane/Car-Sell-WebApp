import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";

const Header = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1444px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={100}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign In"
          buttonType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Header;
