import React, {useState, useContext} from 'react'
import { Provider, Context } from "./ItemContext";

const AccordionTrigger = (props) => {
  const context = useContext(Context)
  console.log(context.triggerAttributes['aria-expanded'])

  const toggleAccordion = () => {
    
    //アコーディオンが開いているか？
    const itemExpanded = context.itemState['isExpanded']

    //トリガー
    context.setTriggerAttributes( triggerAttributes =>({
      ...triggerAttributes,
      "aria-expanded": itemExpanded ? false : true
    }));

    //パネル
    context.setPanelAttributes( panelAttributes =>({
      ...panelAttributes,
      "aria-hidden": itemExpanded ? true : false
    }));
    context.setPanelStyles( panelStyles =>({
      ...panelStyles,
      "height": itemExpanded ? 0 : "auto",
      "visibility": itemExpanded ? "hidden" : "visible",
    }));

    //アイテム（アコーディオン単体）
    context.setItemState( itemState =>({
      ...itemState,
      isExpanded: itemExpanded ? false : true
    }));


   };

  return (
    <button className="AccordionTrigger" onClick={toggleAccordion} {...context.triggerAttributes}>
      {props.children}
    </button>
  );
}

export default AccordionTrigger;