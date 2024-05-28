import React, { useState } from "react";
import { FaMapMarkedAlt, FaTimes } from "react-icons/fa";

function TravelList() {
  const [itemNo, setItemNo] = useState(1);
  const [itemType, setItemType] = useState();
  const [itemName, setItemName] = useState("");
  const [itemlist, setItemList] = useState([]);

  const listNo = itemlist.length;

  const handleSetItems = (item) => {
    setItemList((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItemList((itemlist) => itemlist.filter((item) => item.id !== id));
  };

  function itemChecked(id) {
    setItemList((itemlist) =>
      itemlist.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemName) return;

    const newItems = {
      id: Date.now(),
      itemCount: itemNo,
      itemUnit: itemType,
      itemDesc: itemName,
      packed: false,
    };

    handleSetItems(newItems);

    setItemNo(1);
    setItemName("");
    console.log(newItems);
  };

  return (
    <div className="travelList">
      <div className="p-4 bg-yellow-400 text-white flex items-center gap-2 text-6xl border-b-4 justify-center border-orange-500">
        <span className=" text-5xl font-bold">Far</span>
        <FaMapMarkedAlt className=" text-orange-500" />
        <span className=" text-5xl font-bold">Away</span>
      </div>
      <div className=" bg-orange-200 p-4">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center gap-4 items-center">
            <label className=" font-medium text-orange-600">
              What do you need for your Trip?
            </label>
            <div>
              <input
                type="number"
                value={itemNo}
                onChange={(e) => setItemNo(e.target.value)}
                className=" border py-1 px-4 rounded-full border-orange-500 w-28"
              />
            </div>
            <div>
              <select
                value={itemType}
                onChange={(e) => setItemType(e.target.value)}
                className=" border py-1 px-4 rounded-full border-orange-500"
              >
                <option></option>
                <option>Gram</option>
                <option>Kg</option>
                <option>Liter</option>
                <option>Piece</option>
                <option>Pair</option>
                <option>Bag</option>
                <option>Box</option>
                <option>Dozen</option>
                <option>Amount</option>
              </select>
            </div>
            <div>
              <input
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className="border py-1 px-4 rounded-full border-orange-500"
                type="text"
                placeholder="Item..."
              />
            </div>
            <div>
              <button className="border py-1 px-4 rounded-full bg-orange-300 hover:bg-orange-500 hover:text-white border-orange-500">
                ADD
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <ul className="flex flex-wrap justify-evenly my-4">
          {itemlist.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-2 border border-orange-200 rounded-full px-2 bg-orange-50"
            >
              <input
                type="checkbox"
                value={item.packed}
                onChange={() => itemChecked(item.id)}
              />{" "}
              <span
                style={
                  item.packed
                    ? { textDecoration: "line-through", color: "" }
                    : {}
                }
              >
                {item.itemCount} {item.itemUnit} {item.itemDesc}
              </span>
              <button
                onClick={() => handleDeleteItem(item.id)}
                className="text-orange-400 hover:text-orange-700"
              >
                <FaTimes />
              </button>
            </li>
          ))}
        </ul>
        <div className="flex">
          <p>You have {listNo} items on your list, and you already packed </p>

          <button onClick={() => setItemList([])}>ClearList</button>
        </div>
      </div>
    </div>
  );
}

export default TravelList;
