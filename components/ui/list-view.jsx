"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export const ListView = ({ products }) => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <Header />
      <div className="space-y-20">
        {products.map((product) => (
          <ProductCard product={product} key={product.title} />
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 text-center">
      <h1 className="text-3xl font-bold dark:text-white mb-6">
        Phillip Hickinbotham <br /> Software Developer
      </h1>
      <p className="font-semibold text-lg dark:text-neutral-200">{/* bio */}</p>
      <p className="max-w-2xl text-base md:text-xl dark:text-neutral-200 mx-auto mt-2">
        Javascript | React | Next.js | Node.js | Express.js | Laravel
      </p>

      <nav className="mx-auto mt-6">
        <ul className="flex justify-center space-x-6 text-xl">
          <li>
            <Link
              href="/About"
              className="bg-gray-900 px-4 py-2 ring-1 ring-gray-400"
            >
              About Me
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/Philliphick"
              target="_blank"
              className="bg-gray-900 px-4 py-2 ring-1 ring-gray-400"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="/CV_Phillip_Hickinbotham.pdf"
              target="_blank"
              className="bg-gray-900 px-4 py-2 ring-1 ring-gray-400"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="group/product w-full h-auto relative flex flex-col mb-8">
      <Link href={product.link} className="block">
        <div className="relative w-full h-64 bg-gray-200">
          <Image
            src={product.thumbnail}
            height="600"
            width="600"
            className="object-cover w-full h-full"
            alt={product.title}
          />
        </div>
        <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
        <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white text-xl">
          {product.title}
        </h2>
      </Link>
    </div>
  );
};

export default ListView;
