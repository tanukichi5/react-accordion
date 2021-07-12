import React, {useState, useContext, useRef, useEffect} from 'react'
import { Provider, Context } from "./ItemContext";
import { Context as  accordionContext} from "./AccordionContext";


const AccordionTrigger = (props) => {
  const context = useContext(Context)
  const rootContext = useContext(accordionContext)
  // console.log(context.triggerAttributes['aria-expanded'])
  
  const toggleAccordion = () => {

    
    //アコーディオンが開いているか？
    const itemExpanded = context.itemState['isExpanded']
    // console.log(getPanelHeight(panelEl))


    //トリガー
    // context.setTriggerAttributes( triggerAttributes =>({
    //   ...triggerAttributes,
    //   "aria-expanded": itemExpanded ? false : true
    // }));

    //パネル
    // context.setPanelAttributes( panelAttributes =>({
    //   ...panelAttributes,
    //   "aria-hidden": itemExpanded ? true : false
    // }));
    // context.setPanelStyles( panelStyles =>({
    //   ...panelStyles,
    //   "height": itemExpanded ? 0 : getPanelHeight(panelEl),
    //   "visibility": itemExpanded ? "hidden" : "visible",
    // }));

    //アイテムの状態を変更
    context.setItemState( itemState =>({
      ...itemState,
      isExpanded: itemExpanded ? false : true
    }));

    

    //開いているパネルのindexを保存
    if(rootContext.accordionState['multipleOpen']) {
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
        expandedPanels: new Set([context.itemState.['index']])
      }));
      // console.log(rootContext.accordionState['expandedPanels'])
    }

    // console.log(rootContext.accordionState)


   };


  return (
    <button className="AccordionTrigger" onClick={toggleAccordion} {...context.triggerAttributes}>
      {props.children}
    </button>
  );
}

export default AccordionTrigger;