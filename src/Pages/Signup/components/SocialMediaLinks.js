import React, { useState } from "react";
import { useForm } from "react-hook-form";
import linkedin from "../../../Assets/images/image/linkedin.jpeg";
import Instagram from "../../../Assets/images/image/Instagram.jpeg";
import twitter from "../../../Assets/images/image/twitter.jpeg";
const SocialMediaLink = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="formbox grid">
      <div className="header  mb-4">
        <h2 className="text-[26px] font-medium">Enter social media links</h2>
        <p className="text-gray-500 text-md">
          This will help us customise salesroom for you
        </p>
      </div>
      <div className="body pb-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-4">
              <div className="flex justify-center mb-4">
                <div className="flex items-center mr-3">
                  <img className="w-10/12" src={linkedin} alt="linkedin" />
                </div>
                <input
                  className="!mb-0"
                  {...register("linkedin", {
                    required: "Please enter your linkedin link",
                  })}
                  placeholder="Enter LinkedIn profile link"
                  autoComplete="off"
                />
              </div>
              <span className="errormsg ml-[65px]">
                {errors.linkedin && errors.linkedin.message}
              </span>
            </div>
            <div className="col-span-4">
              <div className="flex justify-center mb-4">
                <div className="flex items-center mr-3">
                  <img className="w-10/12" src={Instagram} alt="Instagram" />
                </div>
                <input
                  className="!mb-0"
                  {...register("Instagram", {
                    required: "Please enter your instagram link",
                  })}
                  placeholder="Enter Instagram profile link"
                  autoComplete="off"
                />
              </div>
              <span className="errormsg ml-[65px]">
                {errors.Instagram && errors.Instagram.message}
              </span>
            </div>
            <div className="col-span-4">
              <div className="flex justify-center mb-4">
                <div className="flex items-center mr-3">
                  <img className="w-10/12" src={twitter} alt="twitter" />
                </div>
                <input
                  className="!mb-0"
                  {...register("twitter", {
                    required: "Please enter your twitter link",
                  })}
                  placeholder="Enter twitter profile link"
                  autoComplete="off"
                />
              </div>
              <span className="errormsg ml-[65px]">
                {errors.twitter && errors.twitter.message}
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

export default SocialMediaLink;
