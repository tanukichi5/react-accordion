import React, {useState, useContext, useRef, useEffect} from 'react'
import { Provider, Context } from "./ItemContext";
import { Context as  accordionContext} from "./AccordionContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";


const AccordionTrigger = (props) => {
  const context = useContext(Context)
  const rootContext = useContext(accordionContext)

  //アコーディオンが開いているか？
  const itemExpanded = context.itemState['isExpanded']
  
  const toggleAccordion = () => {

    //アイテムの状態を変更
    context.setItemState( itemState =>({
      ...itemState,
      isExpanded: itemExpanded ? false : true
    }));

    //開いているパネルのindexを保存
    if(rootContext.accordionState['multipleExpanded']) {
      itemExpanded ? 
        rootContext.accordionState['expandedPanels'].delete(context.itemState.['index']) :
        rootContext.accordionState['expandedPanels'].add(context.itemState.['index'])
      
      rootContext.setAccordionState( accordionState =>({
        ...accordionState,
        expandedPanels: rootContext.accordionState['expandedPanels']
      }));
    } else {
      rootContext.setAccordionState( accordionState =>({
        ...accordionState,
        //自身が開いている場合は閉じる
        expandedPanels: itemExpanded ? new Set() : new Set([context.itemState.['index']])
      }));
      // console.log(rootContext.accordionState['expandedPanels'])
    }

   };


  return (
    <button className="AccordionTrigger" type="button" onClick={toggleAccordion} {...context.triggerAttributes}>
      {props.children}
      <FontAwesomeIcon icon={itemExpanded ? faMinus : faPlus} />
    </button>
  );
}

export default AccordionTrigger;