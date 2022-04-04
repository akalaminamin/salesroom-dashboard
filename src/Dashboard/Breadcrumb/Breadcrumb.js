import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
const Breadcrumb = () => {
  return (
    <>
      <nav class="flex border-b-2 border-[#C7C7C7] h-12 px-6">
        <ol class="flex items-center space-x-1 md:space-x-2 h-full">
          <li class="inline-flex items-center">
            <Link
              to="/dashboard/products"
              class="inline-flex items-center text-sm font-medium text-fontColor hover:text-gray-900"
            >
              Deckmount Sales
            </Link>
          </li>
          <li>
            <div class="flex items-center">
              <span className="text-fontColor"><MdKeyboardArrowRight /></span>
              <span class="ml-1 text-sm font-medium text-fontColor hover:text-gray-900">
                My Products
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
