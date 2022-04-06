import React, { useState } from "react";
import { MdArrowRight, MdArrowDropDown } from "react-icons/md";

const CommonProductImg = ({ title }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex">
        <span
          className="cursor-pointer mt-1 mr-1 text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <MdArrowDropDown /> : <MdArrowRight />}
        </span>
        <h2
          className="text-fontColor cursor-pointer text-xl"
          onClick={() => setOpen(!open)}
        >
          {title}
        </h2>
      </div>
      <div
        className={open ? "flex items-center flex-wrap gap-5 mb-5" : "hidden"}
      >
        {/* dynamic data show here */}
        <div>
          <img
            src={require("../../../Assets/images/image/product1.png")}
            alt="product"
          />
        </div>
        <div>
          <img
            src={require("../../../Assets/images/image/product1.png")}
            alt="product"
          />
        </div>
        <div>
          <img
            src={require("../../../Assets/images/image/product1.png")}
            alt="product"
          />
        </div>
        <div className="cursor-pointer">
          <img
            src={require("../../../Assets/images/image/uploadIcon.png")}
            alt="upload"
          />
        </div>
      </div>
    </>
  );
};

export default CommonProductImg;
