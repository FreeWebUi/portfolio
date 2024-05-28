import React, { useEffect, useState } from "react";

function GetAdvices() {
  const [advice, getAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function handleAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    getAdvice(data.slip.advice);
    setCount((c) => c + 1);
    console.log(data);
  }

  useEffect(() => {
    handleAdvice();
  }, []);

  return (
    <div className="getAdvice flex flex-col items-center my-12">
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold text-purple-700 mb-2">
          Get Advice
        </h2>
      </div>
      <div className="w-full max-w-3xl bg-neutral-100 p-4 rounded">
        <h1 className="text-2xl font-bold mb-8">{advice}</h1>
        <button
          className="bg-purple-500 text-white rounded-full px-4 py-1 hover:bg-purple-700"
          onClick={handleAdvice}
        >
          New Advice
        </button>

        <p className="mt-6">Today you have read {count} pieces of advice</p>
      </div>
    </div>
  );
}

export default GetAdvices;
