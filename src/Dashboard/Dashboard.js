import React, { useState } from "react";
import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import { BsArrowRightCircle, BsImages } from "react-icons/bs";
import { RiFileCopy2Fill } from "react-icons/ri";
import { MdContactMail, MdPerson } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const menus = [
    { icon: <RiFileCopy2Fill />, title: "My Products", path: "/my_products" },
    { icon: <BsImages />, title: "Images", path: "/images" },
    { icon: <BsImages />, title: "Manuals", path: "/manuals" },
    { icon: <BsImages />, title: "CAD files" },
    { icon: <BsImages />, title: "Catalogues" },
    { icon: <MdContactMail />, title: "Contact" },
    { icon: <FaVideo />, title: "videos", border: true },
    { icon: <MdPerson />, title: "Members" },
    { icon: <IoSettingsSharp />, title: "Setting" },
  ];
  return (
    <div>
      <NavBar />
      <div className="flex">
        <div
          className={`${
            open ? "w-60" : "w-14"
          } duration-300 h-screen bg-gray-50 relative pt-5  border-r-2 border-[#C7C7C7]`}
        >
          <span
            className={`cursor-pointer absolute top-9 w-7 text-black text-xl ${
              open ? "rotate-180 -right-2" : " -right-4"
            }`}
            onClick={() => setOpen(!open)}
          >
            <BsArrowRightCircle />
          </span>
          <h1
            className={`text-black font-semibold text-xl p-3 ${
              !open && "scale-0"
            }`}
          >
            Deckmount Sales
          </h1>
          <div className="pt-4">
            <ul>
              {menus.map((menu, index) => (
                <li
                  key={index}
                  className={`flex items-center text-fontColor gap-x-4 p-2 px-4 cursor-pointer hover:bg-blue-50 border-l-[5px] hover:border-primary hover:text-primary rounded-sm font-normal text-lg ${
                    menu.border && "border-b-2 border-[#C7C7C7]"
                  }`}
                >
                  <span className="">{menu.icon}</span>
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {menu.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
          <h1>My Products</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
