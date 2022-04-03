import React from "react";
import { RiAddFill } from "react-icons/ri";
import { IoCreateSharp } from "react-icons/io5";
import { FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";
import CommonModal from "../Modal/CommonModal";
const NavBar = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <nav className="py-4 border-b-2 border-[#C7C7C7]">
      <div className="flex px-3">
        <div className="basis-2/4">
          <Link to="/dashboard">
            <img
              className="w-44"
              src={require("../../Assets/images/image/logo.png")}
              alt="logo"
            />
          </Link>
        </div>
        <div className="font-poppins flex items-center justify-start space-x-3 basis-2/4">
          <button
            className="text-primary py-[6px] px-4 border border-primary rounded-full text-md font-semibold flex justify-between"
            onClick={() => setShowModal(true)}
          >
            <span className="text-xl font-semibold px-2">
              <RiAddFill />
            </span>
            Add
          </button>
          
          <button className="text-white py-[6px] px-4 bg-primary rounded-full text-md font-semibold flex justify-between shadow-xl">
            <span className="text-xl font-semibold px-2">
              <IoCreateSharp />
            </span>
            Create
          </button>
          <button className="text-white py-[6px] px-4 bg-black rounded-full text-md font-semibold flex justify-between shadow-xl">
            <span className="text-xl font-semibold px-2">
              <FaShare />
            </span>
            Share
          </button>
        </div>
      </div>
      {showModal && (
        <CommonModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </nav>
  );
};

export default NavBar;
