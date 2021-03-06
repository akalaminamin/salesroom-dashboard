import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SalesroomToWork = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  // const [formValues, setFormValues] = useState({
  //   members: "",
  //   industry: "",
  //   manufacture: "",
  // });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="formbox grid">
      <div className="header  mb-4">
        <h2 className="text-[26px] font-medium">Put Salesroom to work</h2>
        <p className="text-gray-500 text-md">
          This will help us customise salesroom for you
        </p>
      </div>
      <div className="body pb-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-4">
              <label
                htmlFor="members"
                className="block mb-2 text-md font-medium text-gray-800"
              >
                How many members do you have in your organisation?
              </label>
              <select
                id="members"
                className="form-select mb-4"
                {...register("members", { required: "Please select a option" })}
              >
                <option value="">Eg. 5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
              <span className="errormsg">
                {errors.members && errors.members.message}
              </span>
            </div>
            <div className="col-span-4">
              <label
                htmlFor="industry"
                className="block mb-2 text-md font-medium text-gray-800"
              >
                Which industry does your organisation belong to ?
              </label>
              <select
                id="industry"
                className="form-select mb-4"
                {...register("industry", {
                  required: "Please select a option",
                })}
              >
                <option value="">Eg. Engineering tools</option>
                <option value="Software Developement">
                  Software Developement
                </option>
                <option value="Web Development">Web Development</option>
              </select>
              <span className="errormsg">
                {errors.industry && errors.industry.message}
              </span>
            </div>
            <div className="col-span-4">
              <label
                htmlFor="manufacture"
                className="block mb-2 text-md font-medium text-gray-800"
              >
                What does your company manufacture ?
              </label>
              <select
                id="manufacture"
                className="form-select mb-4"
                {...register("manufacture", {
                  required: "Please select a option",
                })}
              >
                <option value="">Eg. Furnace machines</option>
                <option value="Eg. Furnace machines">
                  Eg. Furnace machines
                </option>
                <option value="Eg. Furnace machines">
                  Eg. Furnace machines
                </option>
              </select>
              <span className="errormsg">
                {errors.manufacture && errors.manufacture.message}
              </span>
            </div>
            <div className="col-span-4 flex justify-between">
              <a href="/">SKIP</a>
              <button type="submit">Done</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SalesroomToWork;
