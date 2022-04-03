import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import OtpInput from 'react-otp-input';

const EnterOTP = () => {
  const SalesroomForm = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      mode: "onTouched",
    });

    const [otpCode, setOtpCode] = useState('');
    const onSubmit = (data) => { };

    const handleChange = (otpCode) => setOtpCode(otpCode);

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-4 flex justify-center items-center">
              {/* <input
                {...register("otp", { required: "Please enter OTP Code",})}
                type="number"
                placeholder="Enter OTP Code"
                name="otp"
                autoComplete="off"
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
              />
              <span className="errormsg">
                {errors.otp && errors.otp.message}
              </span> */}

              <OtpInput
                // value={code}
                value={otpCode}
                onChange={handleChange}
                // onChange={(e) => setOtpCode(e.target.value)}
                numInputs={6}
                separator={<span style={{ width: '8px' }}></span>}
                isInputNum={true}
                shouldAutoFocus={true}
                inputStyle={{
                  border: '1px solid #ced4da',
                  borderRadius: '5px',
                  width: '45px',
                  height: '70px',
                  fontSize: '20px',
                  color: '#000',
                  fontWeight: '500',
                  caretColor: 'blue',
                }}
                focusStyle={{
                  border: '1px solid #CFD3DB',
                }}
              />
              <span className="errormsg ">
                {/* {errors.otp && errors.otp.message} */}
                <div className="mt-[90px]">

                  {otpCode.length <= 0 && 'Please Enter OPT'}
                </div>
              </span>
            </div>

            <div className="col-span-4 flex justify-between">
              <Link to="/">SKIP</Link>

              <button type="submit">Done</button>
            </div>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className="formbox grid  ">
      <div className="header  mb-7">
        <h2 className="text-[26px] font-medium">
          Enter OTP sent to your email
        </h2>
      </div>
      <div className="body pb-20">
        <SalesroomForm />
      </div>
    </div>
  );
};

export default EnterOTP;
