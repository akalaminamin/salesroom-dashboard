import React, { useContext, useState } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input, InputNumber } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
const EnterOTP = () => {
  const { EnterOPT, setEnterOPT, next } = useContext(MultiStepFormContext);

  const [otpCode, setOtpCode] = useState("");
  const onSubmit = (data) => {};

  const handleChange = (otpCode) => setOtpCode(otpCode);

  return (
    <Formik
      initialValues={EnterOPT}
      onSubmit={(values) => {
        setEnterOPT(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <>
            <div className="header  mb-7">
              <h2 className="text-[26px] font-medium">
                Enter OTP sent to your email
              </h2>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <div className="body col-span-4 pt-12">
                <div className="grid grid-cols-4 gap-3">
                  <div className="col-span-4 flex justify-center items-center">
                    <OtpInput
                      // value={code}
                      value={otpCode}
                      onChange={handleChange}
                      // onChange={(e) => setOtpCode(e.target.value)}
                      numInputs={6}
                      separator={<span style={{ width: "8px" }}></span>}
                      isInputNum={true}
                      shouldAutoFocus={true}
                      inputStyle={{
                        border: "1px solid #ced4da",
                        borderRadius: "5px",
                        width: "45px",
                        height: "70px",
                        fontSize: "20px",
                        color: "#000",
                        fontWeight: "500",
                        caretColor: "blue",
                      }}
                      focusStyle={{
                        border: "1px solid #CFD3DB",
                      }}
                    />
                    <span className="errormsg ">
                      {/* {errors.otp && errors.otp.message} */}
                      <div className="mt-[110px]">
                        {otpCode.length <= 0 && "Please Enter OPT"}
                      </div>
                    </span>
                  </div>
                </div>
              </div>

              <div className="footer col-span-4 flex justify-between mb-5">
                <div></div>
                <button className="btn-blue" onClick={handleSubmit}>
                  Done
                </button>
              </div>
            </div>
          </>
        );
      }}
    </Formik>
  );
};
export default EnterOTP;
