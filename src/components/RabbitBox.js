import React, { useRef, useState } from "react";
import ControlBar from "./ControlBar";
import { zg2uni, uni2zg } from "./Rabbit";

function RabbitBox() {
  const [unicode, setUnicode] = useState("");
  const [zawgyi, setZawgyi] = useState("");

  const unicodeRef = useRef("null");
  const zawgyiRef = useRef("null");

  const handleChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setUnicode(id === "zawgyi" ? zg2uni(value) : value);
    setZawgyi(id === "unicode" ? uni2zg(value) : value);
  };

  const clearAllText = () => {
    setUnicode((oldUnicode) => (oldUnicode = ""));
    setZawgyi((oldZawgyi) => (oldZawgyi = ""));
  };

  return (
    <div className="container p-5 m-auto w-full">
      <header className="text-center font-bold text-2xl text-blue-500 cursor-pointer p-5">
        Rabbit Converter
      </header>
      <div className="md:columns-2 p-5">
        <div className="text-center mb-2">
          <span className="text-2xl font-semibold cursor-pointer">Unicode</span>
          <textarea
            className="w-full h-80 resize-none mt-3 p-4 rounded-md shadow-md text-xl border-2 border-gray-200 outline-none  hover:border-gray-400 focus:border-gray-600 fontUni"
            placeholder="Unicode..."
            onChange={handleChange}
            value={unicode}
            ref={unicodeRef}
            id="unicode"
          ></textarea>
        </div>
        <div className="text-center">
          <span className="text-2xl font-semibold cursor-pointer">Zawgyi</span>
          <textarea
            className="w-full h-80 resize-none mt-3 p-4 rounded-md shadow-md text-xl border-2 border-gray-200 outline-none  hover:border-gray-400 focus:border-gray-600 fontZawgyi"
            placeholder="Zawgyi..."
            onChange={handleChange}
            value={zawgyi}
            ref={zawgyiRef}
            id="zawgyi"
          ></textarea>
        </div>
      </div>
      <ControlBar
        clearAllText={clearAllText}
        unicode={unicodeRef}
        zawgyi={zawgyiRef}
      />
    </div>
  );
}

export default RabbitBox;
