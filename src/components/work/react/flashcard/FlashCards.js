import React, { useState } from "react";

const questions = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is an open-source front-end JavaScript library that is used for building composable user interfaces, especially for single-page applications",
  },
  {
    id: 2,
    question: "What is JSX?",
    answer:
      "JavaScript XML, a syntax extension of JS that allows developers to write HTML in their JS code.",
  },
  {
    id: 3,
    question: "What is state in React?",
    answer:
      "State of a component is an object that holds some information that may change over the lifetime of the component. The important point is whenever the state object changes, the component re-renders",
  },
  {
    id: 4,
    question: "What are props in React?",
    answer:
      "Props are inputs to components. They are single values or objects containing a set of values that are passed down to nested components",
  },
  {
    id: 5,
    question: "What is the difference between state and props?",
    answer:
      "Both are used to manage the data of a component, state is managed by the component itself and can be updated using the setState() and Props are a way to pass read-only data from a parent component down to its child components.",
  },
  {
    id: 6,
    question: "Why should we not update the state directly?",
    answer:
      "If you try to update the state directly then it won't re-render the component.",
  },
  {
    id: 7,
    question: "What are inline conditional expressions?",
    answer:
      "You can use ternary expressions which are available from JS to conditionally render expressions in JSX by wrapping them in curly braces and then followed by JS logical operator &&.",
  },
  {
    id: 8,
    question:
      "What is key prop and what is the benefit of using it in arrays of elements?",
    answer:
      "A key is a special attribute you should include when mapping over arrays to render data. Key prop helps React identify which items have changed, are added, or are removed. Keys should be unique among its siblings.",
  },
  {
    id: 9,
    question: "What is context?",
    answer:
      "Context provides a way to pass data through the component tree without having to pass props down manually at every level.",
  },
  {
    id: 10,
    question: "What is children prop?",
    answer:
      "Children is a prop (this.props.children) that allows you to pass components as data to other components, just like any other prop you use. Added between component's opening and closing tag",
  },
  {
    id: 11,
    question: "What are fragments?",
    answer:
      "Fragments let you group a list of children without adding extra nodes to the DOM.",
  },
  {
    id: 12,
    question: "How to use styles in React?",
    answer:
      "The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string.",
  },
];

function FlashCards() {
  const [qId, setQId] = useState(null);

  function handleClick(id) {
    setQId(id);
  }

  return (
    <div className="flashCard">
      <h2 className=" text-2xl font-medium text-purple-700 my-4">
        React Question & Answer
      </h2>
      <div className="flex flex-wrap mb-4 -mx-4">
        {questions.map((item) => (
          <div className="p-4 w-1/6">
            <div
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`card h-64 bg-purple-100 p-4  flex items-center justify-center rounded leading-tight ${
                item.id === qId ? "bg-purple-500" : ""
              }`}
            >
              {item.id === qId ? (
                <span className=" text-purple-100">{item.answer}</span>
              ) : (
                <span className="font-medium text-purple-700">
                  {item.question}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlashCards;
