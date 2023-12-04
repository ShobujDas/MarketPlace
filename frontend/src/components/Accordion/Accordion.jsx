/* eslint-disable react/prop-types */
import { useState } from "react";
import AccordionItem from "../accordionItem/AccordionItem";
import "./Accordion.css";

const Accordion = ({ data }) => {
    const [curOpen, setCurOpen] = useState(null);
    console.log(data)

  return (
    <div className="accordion">
            {data.map((el, i) => (
            <AccordionItem
                curOpen={curOpen}
                onOpen={setCurOpen}
                title={el.title}
                num={i}
                key={el.title}
            >
                {el.text}
            </AccordionItem>
            ))}

    </div>
  );
};

export default Accordion;