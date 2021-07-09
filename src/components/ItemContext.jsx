import React, { useState, createContext } from "react";

export const Context = createContext({
  setPanelAttributes: () => {},
});

export const Provider = (props) => {
  const options = {
    name: "ほげ",
    age: "17",
    hobby: "キャンプ",
  };


  //パネルの状態管理
  const [panelAttributes, setPanelAttributes] = useState({
    "aria-hidden": true,
    "aria-labelledby": "accordion",
  });
  
  return (
    <Context.Provider
      value={{
        options,
        panelAttributes,
        setPanelAttributes
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
