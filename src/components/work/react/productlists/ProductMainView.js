import React, { useState, useEffect } from "react";
import { FaThList, FaTh } from "react-icons/fa";

export default function ProductMainView() {
  const [data, setData] = useState(null);

  // fetch('https://dummyjson.com/products')
  //     .then(res => res.json())
  //     .then(console.log);

  async function fetchData() {
    const response = await fetch("https://dummyjson.com/products");
    const json = await response.json();
    setData(json);
  }

  return (
    <div className="productMainView">
      <div className="flex justify-between items-center bg-neutral-100 border py-2 px-3">
        <h2 className="font-semibold text-lg">Product View</h2>

        <div className="flex gap-4">
          <button>
            <FaThList />
          </button>
          <button>
            <FaTh />
          </button>
        </div>
      </div>

      <div>
        {data === null && <p>Loading data...</p>}
        {data !== null && (
          <div>
            <p>Data has been loaded!</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
