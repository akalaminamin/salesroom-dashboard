import React from "react";
import Breadcrumb from "../../Breadcrumb/Breadcrumb";
import Tabs from "./Tabs/Tabs";
const MyProducts = () => {
  return (
    <div>
      <Breadcrumb />
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-1">My Products</h2>
          <h2 className="text-lg">3 Products</h2>
        </div>
        <Tabs />
      </div>
    </div>
  );
};

export default MyProducts;
