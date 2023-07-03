import React, { useState } from "react";
import "./faq.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const colors = [
  "#FFD1CB", // red
  "#CBEDFD", // blue
  "#E4CAE6", // purple
  "#D1F7CB", // green
];

const accordionItems = [
  {
    question:
      "1. What are the differences between GTD and school/hall orientation?",
    content:
      "Our orientation is solely for Indonesian students who are studying in NTU, all programs are welcome to join.  Our aim is to foster freshies with Indonesian community in NTU.",
  },
  {
    question: "2. How can I to register?",
    content:
      "You can register yourself by filling up the registration form attached in this page. If you have further questions feel free to DM us on instagram @pintugtd. To reach us via telegram, please refer to contact us section below",
  },
  {
    question: "3. Where, when, and how long will the programs be conducted?",
    content: "Refer to the Event page section on our website!",
  },
  {
    question: "4. How much does it cost?",
    content:
      "The pricing will be specified later prior to the date of the programs. It includes our exclusive annual GTD shirt merchandise, dinner on our last day, and buses!",
  },
];

const AccordionGroup = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  return (
    <div className="accordion-group">
      {accordionItems.map((item, index) => (
        <div key={index} className="rounded-xl shadow m-3">
          <div
            className={`cursor-pointer accordion-header p-3 flex justify-between ${
              index === activeItem ? "active rounded-t-xl" : "rounded-xl"
            }`}
            style={{
              backgroundColor: colors[index % colors.length],
            }}
            onClick={() => handleItemClick(index)}
          >
            <p className="m-0 font-bold lg:text-xl">{item.question}</p>
            <ExpandMoreIcon className="accordion-icon" />
          </div>
          <div
            className={`accordion-content rounded-b-xl p-3 bg-white ${
              index === activeItem ? "active" : ""
            }`}
          >
            <p className="font-medium">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionGroup;
