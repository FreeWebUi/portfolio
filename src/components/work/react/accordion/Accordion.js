import React, { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function Accordion() {
  return (
    <div className="accordion flex flex-col items-center my-12">
      <h2 className="text-xl font-medium text-purple-700 mb-4">Accordion</h2>
      <ul>
        {faqs.map((item, i) => (
          <AccordionItem
            key={item.title}
            title={item.title}
            text={item.text}
            num={i}
          />
        ))}
      </ul>
    </div>
  );
}

function AccordionItem({ title, text, num }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <li onClick={handleToggle}>
      <h3>
        {num + 1}:{title}
      </h3>
      {isOpen && <p>{text}</p>}
    </li>
  );
}
