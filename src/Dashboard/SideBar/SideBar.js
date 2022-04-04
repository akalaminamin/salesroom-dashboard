import React, { useState } from "react";
import { RiFileCopy2Fill } from "react-icons/ri";
import { MdContactMail, MdPerson } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { BiEditAlt } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { RiFile4Line } from "react-icons/ri";
import { BsArrowRightCircle, BsImages, BsCalendar4Range } from "react-icons/bs";
import { Outlet, NavLink } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
const SideBar = () => {
  const [open, setOpen] = useState(true);
  const menus = [
    {
      icon: <RiFileCopy2Fill />,
      title: "My Products",
      path: "/dashboard/products",
    },
    { icon: <BsImages />, title: "Images", path: "/dashboard/images" },
    {
      icon: <BsCalendar4Range />,
      title: "Manuals",
      path: "/dashboard/manuals",
    },
    { icon: <BiEditAlt />, title: "CAD files", path: "/dashboard/cadFiles" },
    {
      icon: <RiFile4Line />,
      title: "Catalogues",
      path: "/dashboard/catalogues",
    },
    { icon: <MdContactMail />, title: "Contact", path: "/dashboard/contact" },
    {
      icon: <FaVideo />,
      title: "videos",
      border: true,
      path: "/dashboard/videos",
    },
    { icon: <MdPerson />, title: "Members", path: "/dashboard/members" },
    { icon: <IoSettingsSharp />, title: "Setting", path: "/dashboard/setting" },
  ];
  return (
    <>
      <div className="flex">
        <div className={`${open ? "w-60" : "w-14"} sidebar-container`}>
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
            <div>
              {menus.map((menu, index) => (
                <NavLink
                  to={menu?.path}
                  key={index}
                  className={({ isActive }) =>
                    isActive
                      ? `sidebar-link text-primary menu-active ${
                          menu.border && "border-b-2 border-b-[#C7C7C7]"
                        }`
                      : `sidebar-link text-fontColor ${
                          menu.border && "border-b-2 border-[#C7C7C7]"
                        }`
                  }
                >
                  <span className="">{menu.icon}</span>
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {menu.title}
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className="text-2xl font-semibold flex-1 h-screen">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SideBar;
