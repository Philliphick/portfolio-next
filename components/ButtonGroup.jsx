import React from "react";

const ButtonGroup = ({ visitUrl, githubUrl }) => {
  return (
    <div className="w-screen flex flex-row gap-8 justify-center items-center mt-8">
      <a href={visitUrl} target="_blank" rel="noopener noreferrer">
        <button className="bg-[#26625f] hover:bg-[#70a78b] text-white text-center font-bold py-2 px-4 transition duration-300">
          Visit
        </button>
      </a>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <button className="bg-[#26625f] hover:bg-[#70a78b] text-white text-center font-bold py-2 px-4 transition duration-300">
          GitHub
        </button>
      </a>
    </div>
  );
};

export default ButtonGroup;
