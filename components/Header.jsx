import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-1/4 absolute top-0 bg-gradient-to-r from-[#70a78b] via-opacity-10 p-4 opacity-90">
      <Link href="/">
        <h1 className="text-xl text-white pl-6 font-bold border-l-4 hover:scale-105 transition duration-300 dark:text-white">
          Home
        </h1>
      </Link>
    </div>
  );
};

export default Header;
