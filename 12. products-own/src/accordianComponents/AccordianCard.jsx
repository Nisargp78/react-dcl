import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const AccordianCard = ({ el }) => {
  let [display, setDisplay] = useState(false);
  return (
    <div className="p-3 bg-gray-800">
      <div
        className="border flex flex-col gap-5 justify-between p-6 text-white bg-slate-700"
        onClick={() => setDisplay(!display)}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl">{el.question}</h2>
          <FaPlus
            className={`text-3xl transition duration-500 ${
              display ? "rotate-45" : ""
            }`}
          />{" "}
        </div>
        {display && <p>{el.answer}</p>}
      </div>
    </div>
  );
};

export default AccordianCard;
