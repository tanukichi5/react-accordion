import React, { useState, createContext, useEffect } from "react";
import { useDebounceFn } from "../utils/useDebounceFn";

export const Context = createContext({
  setAccordionState: () => {},
});

const Provider = (props) => {
  const [accordionState, setAccordionState] = useState({
    expandedPanels: new Set(),
    defaultExpandedPanels: [],
    easing: "ease-out",
    duration: ".3s",
    notTransition: false,
    multipleExpanded: true,
    checkWindowResize: window.innerWidth,
    onOpen: () => {},
    onClose: () => {},
  });

  //パネルの高さを揃えるリサイズイベント
  const windowResizePanelHeightRecalculation = () => {
    setAccordionState((accordionState) => ({
      ...accordionState,
      checkWindowResize: window.innerWidth,
    }));
  };
  //リサイズイベントを間引く処理
  const [onResizeHandler] = useDebounceFn(
    windowResizePanelHeightRecalculation,
    500
  );
  //リサイズイベントを登録
  const panelHeightRemoveEvent = attachEvent(
    window,
    "resize",
    onResizeHandler.bind(this)
  );
  panelHeightRemoveEvent.addEvent()

  return (
    <Context.Provider
      value={{
        accordionState,
        setAccordionState,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;


function attachEvent(element, type, listener, options) {
  return {
    addEvent() {
      element.addEventListener(type, listener, options);
    },
    removeEvent() {
      element.removeEventListener(type, listener);
    },
  };
}
