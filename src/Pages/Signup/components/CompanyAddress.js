import React, { useState } from "react";
// import { Form, Input, Button, Checkbox } from 'antd';
import { useForm } from "react-hook-form";
// import './CSS/SalesroomForm.css'

const CompanyAddress = () => {
  const SalesroomForm = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm({
      mode:"onTouched"
    });
    const [formValues, setFormValues] = useState({
      Address1: "",
      Address2: "",
      Landmark: "",
      PinCode: "",
      District: "",
      state: "",
    });

    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
    const onSubmit =(data) =>{
      console.log(data)
      reset();
    }
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-4">
              <input
                {...register("Address1", { required: "Address1 is required" })}
                placeholder="Address 1 *"
                autoComplete="off"
                value={formValues.Address1}
                onChange={handleChange}
              />
              <span className="errormsg">
                {errors.Address1 && errors.Address1.message}
              </span>
            </div>
            <div className="col-span-4">
              <input
                {...register("Address2", { required: "Address2 is required", maxLength: 20 })}
                placeholder="Address 2 *"
                autoComplete="off"
                value={formValues.Address2}
                onChange={handleChange}
              />
              <span className="errormsg">
                {errors.Address2 && errors.Address2.message}
              </span>
            </div>

            <div className="col-span-3">
              <input
                {...register("Landmark", { required: "Landmark input is required", maxLength: 20 })}
                placeholder="Landmark *"
                autoComplete="off"
                value={formValues.Landmark}
                onChange={handleChange}
              />
              <span className="errormsg">
                {errors.Landmark && errors.Landmark.message}
              </span>
            </div>
            <div className="col-span-1">
              <input
              type="number"
                {...register("PinCode", {
                  required: "Pin Code is required",
                  pattern: {
                    value: /\d+/,
                    message: "Only number allowed.",
                  },
                })}
                placeholder="PinCode *"
                autoComplete="off"
                value={formValues.PinCode}
                onChange={handleChange}
              />
              <span className="errormsg">
                {errors.PinCode && errors.PinCode.message}
              </span>
            </div>
            <div className="col-span-2">
              <input
                {...register("District", { required: "District is required", maxLength: 20 })}
                placeholder="District *"
                autoComplete="off"
                value={formValues.District}
                onChange={handleChange}
              />
              <span className="errormsg">
                {errors.District && errors.District.message}
              </span>
            </div>
            <div className="col-span-2">
              <input
                {...register("state", { required: "State name is required", maxLength: {
                  value:20,
                  message:"Maximum character 20"
                } })}
                placeholder="State *"
                autoComplete="off"
                value={formValues.state}
                onChange={handleChange}
              />
              <span className="errormsg">
                {errors.state && errors.state.message}
              </span>
            </div>
            <div className="col-span-4 flex justify-between">
              <a href="/">SKIP</a>

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
        <h2 className="text-[26px] font-medium">Enter your company address</h2>
      </div>
      <div className="body pb-20">
        <SalesroomForm />
      </div>
    </div>
  );
};

export default CompanyAddress;
