import React from "react";
import { MdKeyboardArrowRight, MdAdd } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState("Categories");
  const categories = [
    { cateName: "capa", icon: false },
    { cateName: "cupa", icon: false },
    { cateName: "Bi-pap", icon: false },
    { cateName: "Add Category", icon: true },
  ];
  const products = [
    { name: "Auto CAPA", icon: false },
    { name: "Manual CAPA", icon: false },
    { name: "Bi-PAP v1.0 CP", icon: false },
    { name: "Bi-PAP v2.0", icon: false },
  ];
  return (
    <>
      <div className="flex">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {/* categories tab */}
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" +
                  (openTab === "Categories"
                    ? "text-white bg-primary"
                    : "text-primary bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab("Categories");
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Categories
              </a>
            </li>
            {/* all products tab */}
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" +
                  (openTab === "products"
                    ? "text-white bg-primary"
                    : "text-primary bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab("products");
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                All Products
              </a>
            </li>
          </ul>
          {/* categories tab content */}
          <div
            className={
              openTab === "Categories"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"
                : "hidden"
            }
            id="link1"
          >
            {categories.map(({ cateName, icon }, index) => (
              <div
                key={index}
                class="flex justify-between text-xl h-40 p-3 rounded-xl bg-gray-100 shadow-lg shadow-gray-500/40 font-bold font-poppins uppercase"
              >
                <h2>{cateName}</h2>
                <span className="self-end text-5xl cursor-pointer">
                  {!icon ? <MdKeyboardArrowRight /> : <MdAdd />}
                </span>
              </div>
            ))}
          </div>
          {/* all products tab content */}
          <div
            className={
              openTab === "products"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"
                : "hidden"
            }
            id="link1"
          >
            {products.map(({ name, icon }, index) => (
              <div
                key={index}
                class="flex justify-between text-xl h-40 p-3 rounded-xl bg-gray-100 shadow-lg shadow-gray-500/40 font-bold font-poppins"
              >
                <h2>{name}</h2>
                <span className="text-3xl cursor-pointer text-fontColor">
                  {!icon ? <BiDotsVerticalRounded /> : <MdAdd />}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
