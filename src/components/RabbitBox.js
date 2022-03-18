import React from "react";

function RabbitBox() {
  return (
    <div className="container p-5 m-auto w-full">
      <header className="text-center font-bold text-2xl text-blue-500 cursor-pointer p-5">
        Rabbit Converter
      </header>
      <div className="columns-2">
        <div className="text-center">
          <span className="text-2xl font-semibold cursor-pointer">Unicode</span>
          <textarea
            className="w-full h-80 resize-none mt-3 p-4 rounded-md shadow-md text-xl border-2 border-gray-200 outline-none  hover:border-gray-400 focus:border-gray-600"
            placeholder="Unicode..."
          ></textarea>
        </div>
        <div className="text-center">
          <span className="text-2xl font-semibold cursor-pointer">Zawgyi</span>
          <textarea
            className="w-full h-80 resize-none mt-3 p-4 rounded-md shadow-md text-xl border-2 border-gray-200 outline-none  hover:border-gray-400 focus:border-gray-600"
            placeholder="Zawgyi..."
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default RabbitBox;
