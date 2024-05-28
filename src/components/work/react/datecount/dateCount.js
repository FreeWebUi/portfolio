import React, { useState } from "react";
import { FaPlus, FaMinus, FaRedoAlt } from "react-icons/fa";
// Get current date

function DateCount() {
  const initialState = 0;

  const [step, setStep] = useState(initialState);
  const [step2, setStep2] = useState(initialState);

  const date = new Date();
  date.setDate(date.getDate() + step2);

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const handleNext = () => {
    setStep(step + 1);
  };

  const handleReset = () => {
    setStep(initialState);
    setStep2(initialState);
  };

  // const handleCountPlus = () => {
  //   setStep2(step2 + step);
  // };
  // const handleCountMinus = () => {
  //   setStep2(step2 - step);
  // };
  console.log("step1:", step);
  console.log("step2:", step2);
  return (
    <div className="dateCount flex justify-center my-12">
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold text-purple-700 mb-2">
          Date Count
        </h2>
        <div className="w-full max-w-xl bg-neutral-100 p-4 rounded">
          <div className="flex justify-between items-center gap-4">
            <div className="flex justify-center items-center">
              <button
                className="bg-purple-600 text-white rounded-full px-4 py-1 z-10"
                onClick={handlePrev}
              >
                <FaMinus />
              </button>
              <span className="uppercase bg-purple-300 text-purple-700 px-4 -mx-2">
                Step count :{" "}
                <span className="font-medium text-purple-900">{step}</span>
              </span>{" "}
              <button
                className="bg-purple-600 text-white rounded-full px-4 py-1 z-10"
                onClick={handleNext}
              >
                <FaPlus />
              </button>
            </div>
            <div>
              <button
                className="bg-purple-600 text-white rounded-full p-2"
                onClick={handleReset}
              >
                <FaRedoAlt />
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="bg-purple-600 text-white rounded-full px-4 py-1 z-10"
                onClick={() => setStep2(step2 - step)}
              >
                <FaMinus />
              </button>{" "}
              <span className="uppercase bg-purple-300 text-purple-700 px-4 -mx-2">
                Date after :{" "}
                <span className="font-medium text-purple-900">{step2}</span>
              </span>
              <button
                className="bg-purple-600 text-white rounded-full px-4 py-1 z-10"
                onClick={() => setStep2(step2 + step)}
              >
                <FaPlus />
              </button>
            </div>
          </div>
          <div className="my-4 text-neutral-400">Or</div>
          <div className="flex justify-center items-center gap-2">
            <label>Custom Input: </label>
            <input
              type="text"
              className="px-2 border w-28"
              value={step2}
              onChange={(e) => setStep2(Number(e.target.value))}
            />
          </div>
          <p className=" font-semibold text-lg mt-6 p-4 bg-purple-100">
            {step2} days from today is {date.toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DateCount;
