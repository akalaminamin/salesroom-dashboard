import React from "react";
import Breadcrumb from "../../Breadcrumb/Breadcrumb";
import CommonProductImg from "../../Common/CommonProductImg/CommonProductImg";

const Videos = () => {
  return (
    <>
      <Breadcrumb />
      <div className="p-6 mb-3">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-1">Videos </h2>
          <h2 className="text-lg">2 Videos</h2>
        </div>
        <CommonProductImg title="CPAP" />
        <CommonProductImg title="Bi-PAP" />
      </div>
    </>
  );
};

export default Videos;
