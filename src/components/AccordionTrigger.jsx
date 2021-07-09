import React, {useState, useContext} from 'react'
import { Provider, Context } from "./ItemContext";

const AccordionTrigger = (props) => {
  const context = useContext(Context)
  console.log(context)

  const toggleAccordion = () => {
    console.log("あああ")
    context.setPanelAttributes( panelAttributes =>({
      ...panelAttributes,
      "aria-hidden": false
    }));
    //アコーディオンの関数
   };

  return (
    <button className="AccordionTrigger" onClick={toggleAccordion}>
      {props.children}
    </button>
  );
}

export default AccordionTrigger;