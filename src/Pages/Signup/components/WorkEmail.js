import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input, InputNumber } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
const WorkEmail = () => {
  const { WorkEmail, setWorkEmail, next } = useContext(MultiStepFormContext);
  return (
    <Formik
      initialValues={WorkEmail}
      onSubmit={(values) => {
        setWorkEmail(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }

        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <>
            <div className="header  mb-7">
              <h2 className="text-[26px] font-medium">Get started with Salesroom</h2>
            </div>
            <div className="grid grid-cols-4 gap-3">

              <div className="body col-span-4 pt-12">
                <div
                  className={`form__item ${errors.email && "input__error"}`}
                >
                  <Input name={"email"} placeholder="Enter your work email *" />
                  <p className={"error__feedback"}>{errors.email}</p>
                </div>
                <div
                  className={"form__item button__items d-flex justify-content-end"}
                >

                </div>
              </div>
              <div className="footer col-span-4 flex justify-between mb-5" >
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
export default WorkEmail;
