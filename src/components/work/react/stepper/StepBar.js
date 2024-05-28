import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function StepBar() {
  const [step, setStep] = useState(1);

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  return (
    <div className="stepBar flex justify-center my-12">
      <div className="w-full max-w-lg bg-neutral-100 p-4 rounded">
        <div className="flex justify-between items-center">
          <span
            className={`w-6 h-6 p-4 rounded-full flex items-center justify-center ${
              step >= 1 ? " bg-purple-600 text-white" : "bg-neutral-200"
            } `}
          >
            1
          </span>
          <span
            className={`w-6 h-6 p-4 rounded-full flex items-center justify-center ${
              step >= 2 ? " bg-purple-600 text-white" : "bg-neutral-200"
            } `}
          >
            2
          </span>
          <span
            className={`w-6 h-6 p-4 rounded-full flex items-center justify-center ${
              step >= 3 ? " bg-purple-600 text-white" : "bg-neutral-200"
            } `}
          >
            3
          </span>
        </div>
        <p className=" font-semibold text-lg my-6 p-4 bg-neutral-50">
          Step {step}: {messages[step - 1]}
        </p>
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrev}
            className="bg-purple-600 text-white rounded-full px-4 py-1"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="bg-purple-600 text-white rounded-full px-4 py-1"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default StepBar;
