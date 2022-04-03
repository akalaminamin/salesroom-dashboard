import React, { useState } from "react";
import { Steps } from "antd";
import { Provider } from "./components/MultiStepFormContext";
// import WorkEmail from "./Details";
// import EnterOPT from "./EnterOPT";
// import Review from "./Review";
import WorkEmail from "./components/WorkEmail";
import EnterOTP from "./components/EnterOTP";

const { Step } = Steps;

const workEmailInitialState = {
  email: "",
};

const enterOTPInitialState = {
  otp: "",
};
const passwordInitialState = {
  password: "",
};

const renderStep = (step, provideEmail) => {
  switch (step) {
    case 0:
      return provideEmail ? <WorkEmail /> : <EnterOTP />;
    case 1:
      return provideEmail ? <EnterOTP /> : <WorkEmail />;
    // case 2:
    //   return <Review />;
    default:
      return null;
  }
};

const MultiStepForm = ({ provideEmail }) => {
  const [WorkEmail, setWorkEmail] = useState(workEmailInitialState);
  const [EnterOPT, setEnterOPT] = useState(enterOTPInitialState);
  const [Password, setPassword] = useState(passwordInitialState);

  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === 2) {
      setCurrentStep(0);
      setWorkEmail(workEmailInitialState);
      setEnterOPT(enterOTPInitialState);
      setPassword(passwordInitialState);
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  const prev = () => setCurrentStep(currentStep - 1);
  return (
    <div className="bg-[#ecedf0] signup">
      <div className="grid grid-cols-1  h-screen">
        <div className="header flex justify-center h-[0vh]">
          <h1 className="text-[#174fba] font-bold py-3 text-6xl mb-3">
            Salesroom
          </h1>
        </div>
        <Provider
          value={{
            WorkEmail,
            setWorkEmail,
            next,
            prev,
            EnterOPT,
            setEnterOPT,
            Password,
            setPassword,
          }}
        >
          <Steps current={currentStep}>
            {/* <Step title={"Fill in your WorkEmail"} /> */}
            <Step />
            <Step />
            <Step />
            <Step />
          </Steps>
          {/* <main>{renderStep(currentStep)}</main> */}
          <main>
            <div className="formbox grid ">
              {renderStep(currentStep, provideEmail)}
            </div>
          </main>
        </Provider>
      </div>
    </div>
  );
};
export default MultiStepForm;
