import React, { useState, createContext } from "react";

export const Context = createContext({
  setItemState: () => {},
  setTriggerAttributes: () => {},
  setPanelAttributes: () => {},
  setPanelStyles: () => {},
});

export const Provider = (props) => {
  const options = {
    name: "ほげ",
    age: "17",
    hobby: "キャンプ",
  };

  //アイテムの状態
  const [itemState, setItemState] = useState({
    isExpanded: false,
    panelDOM: null
  });
  
  //トリガーの状態管理
  const [triggerAttributes, setTriggerAttributes] = useState({
    "aria-expanded": false,
  });

  //パネルの状態管理
  const [panelAttributes, setPanelAttributes] = useState({
    "aria-hidden": true,
    "aria-labelledby": "accordion",
  });

  //パネルのスタイル
  const [panelStyles, setPanelStyles] = useState({
    "height": 0,
    "boxSizing": "border-box",
    "visibility": "hidden",
    "overflow": "hidden",
    "transition": `height .3s ease-out, visibility .3s`,
  });
  
  return (
    <Context.Provider
      value={{
        options,
        itemState,
        setItemState,
        triggerAttributes,
        setTriggerAttributes,
        panelAttributes,
        setPanelAttributes,
        panelStyles,
        setPanelStyles
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
