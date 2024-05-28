import React, { useState } from "react";

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const totalTips = Number(tip1) + Number(tip2);
  const averageTip = totalTips / 2;
  const tipOnBill = (Number(bill) / 100) * averageTip;
  const totalBill = Number(bill) + tipOnBill;

  const handleReset = () => {
    setBill(0);
    setTip1(0);
    setTip2(0);
  };

  return (
    <div className="tipCalculator flex flex-col items-center">
      <h2>Tip Calculator</h2>
      <div className=" w-full max-w-sm bg-purple-100 rounded p-4">
        <div className="bg-purple-50 p-2 rounded flex justify-between gap-2 items-center mb-1">
          <label>How much was the bill?</label>
          <input
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            className="border px-2 py-1 w-36"
            type="text"
          />
        </div>
        <div className="bg-purple-50 p-2 rounded flex justify-between gap-2 items-center mb-1">
          <label>How was the Service?</label>
          <select
            value={tip1}
            onChange={(e) => setTip1(e.target.value)}
            className="border px-2 py-1 w-36"
          >
            <option value={0}>Dislike - 0%</option>
            <option value={5}>Average - 5%</option>
            <option value={10}>Good - 10%</option>
            <option value={20}>Excelent - 20%</option>
          </select>
        </div>
        <div className="bg-purple-50 p-2 rounded flex justify-between gap-2 items-center mb-1">
          <label>How ur friend like this?</label>
          <select
            value={tip2}
            onChange={(e) => setTip2(e.target.value)}
            className="border px-2 py-1 w-36"
          >
            <option value={0}>Dislike - 0%</option>
            <option value={5}>Average - 5%</option>
            <option value={10}>Good - 10%</option>
            <option value={20}>Excelent - 20%</option>
          </select>
        </div>
        <div className="my-4 text-lg">
          Your total bill : <span className=" font-medium">${totalBill}</span> (
          {bill} + {tipOnBill} tip)
        </div>

        <div>
          <button
            onClick={handleReset}
            className="bg-purple-500 text-white hover:bg-purple-700 px-3 rounded"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default TipCalculator;
