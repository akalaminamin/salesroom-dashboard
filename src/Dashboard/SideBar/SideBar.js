import React, {useState} from "react";
import { RiFileCopy2Fill } from "react-icons/ri";
import { MdContactMail, MdPerson } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { BsArrowRightCircle, BsImages } from "react-icons/bs";
import { Outlet, Link } from "react-router-dom";
const SideBar = () => {
  const [open, setOpen] = useState(true);
  const menus = [
    {
      icon: <RiFileCopy2Fill />,
      title: "My Products",
      path: "/dashboard/products",
    },
    { icon: <BsImages />, title: "Images", path: "/dashboard/images" },
    { icon: <BsImages />, title: "Manuals", path: "/dashboard/manuals" },
    { icon: <BsImages />, title: "CAD files", path: "/dashboard/cadFiles" },
    { icon: <BsImages />, title: "Catalogues", path: "/dashboard/catalogues" },
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
            <div>
              {menus.map((menu, index) => (
                <Link
                  to={menu?.path}
                  key={index}
                  className={`flex items-center text-fontColor gap-x-4 p-2 px-4 cursor-pointer menu-hover rounded-sm font-normal text-lg ${
                    menu.border && "border-b-2 border-[#C7C7C7]"
                  }`}
                >
                  <span className="">{menu.icon}</span>
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {menu.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
          <h1>My Products</h1>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SideBar;
