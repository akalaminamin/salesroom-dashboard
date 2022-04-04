import React from "react";
import { MdKeyboardArrowRight, MdAdd } from "react-icons/md";

const TabContent = ({ contents }) => {
  return (
    <>
      {contents.map(({ name, icon }, index) => (
        <div
          key={index}
          class="flex justify-between text-xl h-40 p-3 rounded-xl bg-gray-100 shadow-lg shadow-gray-500/40 font-bold font-poppins uppercase"
        >
          <h2>{name}</h2>
          <span className="self-end text-5xl cursor-pointer">
            {!icon ? <MdKeyboardArrowRight /> : <MdAdd />}
          </span>
        </div>
      ))}
    </>
  );
};

export default TabContent;
