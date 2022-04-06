import React from "react";
import { RiAddFill } from "react-icons/ri";
import CommonModal from "../Common/CommonModal/CommonModal";
const Dropdown = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [showDropdown, setShowDropdown] = React.useState(false);
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleDropdownItem = () => {
    setShowModal(true);
    setShowDropdown(!showDropdown);
  };
  const dropdownItems = [
    "Category",
    "Product",
    "Manual",
    "Catalogue",
    "CAD drawings",
    "Videos",
  ];
  return (
    <>
      <div className="relative">
        <button
          className="text-primary py-[6px] px-4 border border-primary rounded-full text-md font-semibold flex justify-between"
          onClick={handleDropdown}
        >
          <span className="text-xl font-semibold px-2">
            <RiAddFill />
          </span>
          Add
        </button>
        <div
          class={
            showDropdown
              ? "origin-top-right absolute right-0 -mt-10 w-[155px] rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              : "hidden"
          }
          role="menu"
        >
          <div class="py-1" role="none">
            {dropdownItems.map((item, index) => (
              <li
                key={index}
                class="text-gray-700 block px-4 py-2 text-sm cursor-pointer menu-hover"
                role="menuitem"
                tabIndex="-1"
                onClick={handleDropdownItem}
              >
                {item}
              </li>
            ))}
          </div>
        </div>
      </div>
      {showModal && (
        <CommonModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default Dropdown;
