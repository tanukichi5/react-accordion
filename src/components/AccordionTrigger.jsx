import React, {useState, useContext} from 'react'
import { Provider, Context } from "./ItemContext";

function getPanelHeight(panel) {
  // パネルのコピーを作る
  let ghostPanel = panel.cloneNode(true);
  // パネルの親ノードに挿入
  panel.parentNode.appendChild(ghostPanel);
  // ひとまずみえなくする
  ghostPanel.style.cssText = "display:block; height:auto; visibility:hidden;";
  // コピーの高さを調べる
  var ghostPanelHeight = ghostPanel.offsetHeight;
  // コピーした要素を削除する
  panel.parentNode.removeChild(ghostPanel);
  // console.log(ghostPanelHeight)
  return ghostPanelHeight
}

const AccordionTrigger = (props) => {
  const context = useContext(Context)
  console.log(context.triggerAttributes['aria-expanded'])

  const toggleAccordion = () => {
    
    //アコーディオンが開いているか？
    const itemExpanded = context.itemState['isExpanded']

    const panelEl = context.itemState['panelDOM']
    console.log(getPanelHeight(panelEl))


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
      "height": itemExpanded ? 0 : getPanelHeight(panelEl),
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