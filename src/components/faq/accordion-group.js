import React, { useState } from "react";
import "./faq.css";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const colors = [
    "#FFD1CB", // red 
    "#CBEDFD", // blue
    "#E4CAE6", // purple 
    "#D1F7CB", // green
    "#FFD1CB", // red 
    "#CBEDFD", // blue
    "#D1F7CB", // green
]

const AccordionGroup = () => {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (index) => {
        setActiveItem(index === activeItem ? null : index);
    };

    return (
        <div className="accordion-group">
            {Array.from({ length: 7 }, (_, index) => (
                <div key={index} className="rounded-xl shadow m-3">
                    <div
                        className={`cursor-pointer accordion-header p-3 flex justify-between ${
                            index === activeItem ? "active rounded-t-xl" : "rounded-xl"
                        }`}
                        style={{
                            'backgroundColor': `${colors[index]}`
                        }}
                        onClick={() => handleItemClick(index)}
                    >
                        <p className="m-0 font-bold text-xl">Question {index + 1}</p>
                        
                        <ExpandMoreIcon className="accordion-icon" />
                    </div>
                    <div
                        className={`accordion-content rounded-b-xl p-3 bg-white ${
                            index === activeItem ? "active" : ""
                        }`}
                    >
                        <p className="font-medium">Content for Accordion {index + 1}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AccordionGroup;
