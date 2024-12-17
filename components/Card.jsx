import React from "react";

const Card = ({ icon, title, content }) => {
  return (
    <div className="relative flex flex-col min-w-0 mt-4">
      <div className="px-4 py-5 flex-auto">
        <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full border-2">
          {icon}
        </div>
        <h6 className="text-xl mb-1 font-semibold">{title}</h6>
        <p className="mb-4">{content}</p>
      </div>
    </div>
  );
};

export default Card;
