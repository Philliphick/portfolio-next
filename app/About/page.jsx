"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-800 via-gray-600 to-gray-800 text-white flex flex-col justify-center items-center">
      {/* Navbar for larger screens */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Back button visible at all screen sizes */}
      <div className="absolute top-4 left-4">
        <button
          onClick={() => window.history.back()}
          className="bg-gray-800 px-4 py-2 hover:ring-1 hover:ring-gray-400 hover:bg-gray-900 transition-all duration-200"
        >
          Back
        </button>
      </div>

      <section className="w-full px-6 sm:px-12 md:px-16 py-8 sm:py-12 md:py-16 max-w-3xl flex justify-center">
        <div className="text-center md:text-left w-full flex flex-col justify-center items-center md:items-start gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Hi, I'm Phillip
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-7 md:leading-8 text-justify mb-6 max-w-2xl mx-auto md:mx-0">
            As a junior developer, I bring a solid foundation in both front-end
            and back-end technologies, with hands-on experience in React,
            Next.js, Svelte, Express.js, MongoDB, and Laravel. <br />
            <br /> I've worked across various stages of the software development
            lifecycle (SDLC), including wireframing, development, and
            collaborating with clients to deliver high-quality products. <br />
            <br /> My approach centers around creating clean, maintainable code
            and leveraging progressive enhancement techniques to deliver optimal
            user experiences across all devices. <br />
            <br /> In addition to my technical expertise, I have developed
            strong problem-solving skills and thrive in Agile environments.{" "}
            <br /> I've worked closely with clients to gather requirements and
            transform them into functional, user-friendly interfaces, using
            tools like Figma, Penpot, and Storybook. <br />
            <br />
            With experience managing both front and back-end development tasks,
            I take pride in collaborating with teams to deliver results
            efficiently while maintaining a focus on best practices and robust
            architecture. <br />
            <br /> Having worked in diverse roles, including eCommerce
            management and technical support, I’ve cultivated excellent
            communication, adaptability, and time management skills. <br />
            <br /> I’m always eager to learn and take on new challenges, and I’m
            excited to continue developing my skills while contributing to
            impactful projects.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Page;
