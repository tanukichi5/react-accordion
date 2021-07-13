import React, {
  useState,
  createContext,
  useEffect,
  useRef,
  useContext,
} from "react";
import { Context as accordionContext } from "./AccordionContext";


export const Context = createContext({
  setItemState: () => {},
  setTriggerAttributes: () => {},
  setPanelAttributes: () => {},
  setPanelStyles: () => {},
});

export const Provider = (props) => {
  const renderFlgRef = useRef(false);
  const renderFlgRefResize = useRef(false);
  const renderFlgRefRoot = useRef(false);

  const rootContext = useContext(accordionContext);

  const isInitialExpanded = rootContext.accordionState[
    "defaultExpandedPanels"
  ].includes(props.panelIndex);

  //アイテムの状態
  const [itemState, setItemState] = useState({
    isExpanded: isInitialExpanded ? true : false,
    index: props.panelIndex,
    panelDOM: null,
  });

  //開閉時のコールバック関数をセット
  const onOpen = rootContext.accordionState["onOpen"];
  const onClose = rootContext.accordionState["onClose"];

  //トリガーの状態管理
  const [triggerAttributes, setTriggerAttributes] = useState({
    "aria-expanded": itemState["isExpanded"] ? true : false,
  });

  //パネルの状態管理
  const [panelAttributes, setPanelAttributes] = useState({
    "aria-hidden": itemState["isExpanded"] ? false : true,
    "aria-labelledby": "accordion",
  });

  //パネルのスタイル
  const [panelStyles, setPanelStyles] = useState({
    height: itemState["isExpanded"] ? getPanelHeight(itemState.panelDOM) : 0,
    visibility: itemState["isExpanded"] ? "visible" : "hidden",
    boxSizing: "border-box",
    overflow: "hidden",
    transition: rootContext.accordionState.notTransition
      ? ""
      : `height ${rootContext.accordionState.duration} ${rootContext.accordionState.easing}, visibility ${rootContext.accordionState.duration}`,
  });
  
  //アコーディオンの開閉状態が変更されたら発火
  useEffect(() => {
    // if(!itemState['panelEl']) return
    if (renderFlgRef.current) {
      //トリガー
      setTriggerAttributes((triggerAttributes) => ({
        ...triggerAttributes,
        "aria-expanded": itemState["isExpanded"] ? true : false,
      }));

      //パネル
      setPanelAttributes((panelAttributes) => ({
        ...panelAttributes,
        "aria-hidden": itemState["isExpanded"] ? false : true,
      }));

      setPanelStyles((panelStyles) => ({
        ...panelStyles,
        height: itemState["isExpanded"]
          ? getPanelHeight(itemState.panelDOM)
          : 0,
        visibility: itemState["isExpanded"] ? "visible" : "hidden",
      }));

      //開閉時のコールバック関数実行
      if (itemState["isExpanded"]) {
        onOpen(itemState.panelDOM);
      } else {
        onClose(itemState.panelDOM);
      }

    } else {
      renderFlgRef.current = true;
    }
  }, [itemState["isExpanded"]]);

  //パネルDOM取得時に高さ調整
  useEffect(() => {
    // console.log('パネルDOM取得')
    setPanelStyles((panelStyles) => ({
      ...panelStyles,
      height: itemState["isExpanded"] ? getPanelHeight(itemState.panelDOM) : 0,
      visibility: itemState["isExpanded"] ? "visible" : "hidden",
    }));
    // console.log(rootContext.accordionState['expandedPanels'].has(itemState.index));
  }, [itemState["panelDOM"]]);

  //multipleExpandedの処理
  //falseは自分以外閉じる
  useEffect(() => {
    if (renderFlgRefRoot.current) {
      if (rootContext.accordionState["expandedPanels"].has(itemState.index)) {
        setItemState((itemState) => ({
          ...itemState,
          isExpanded: true,
        }));
      } else {
        setItemState((itemState) => ({
          ...itemState,
          isExpanded: false,
        }));
      }
    } else {
      renderFlgRefRoot.current = true;
    }

    // console.log(rootContext.accordionState['expandedPanels'].has(itemState.index));
  }, [rootContext.accordionState["expandedPanels"]]);

  //開いているパネルの高さをwindowresize時に調整
  useEffect(() => {
    if (renderFlgRefResize.current) {
      if(itemState["isExpanded"]) {
        setPanelStyles((panelStyles) => ({
          ...panelStyles,
          height: getPanelHeight(itemState.panelDOM)
        }));
      }
    } else {
      renderFlgRefResize.current = true;
    }
  }, [rootContext.accordionState["checkWindowResize"]]);



  return (
    <Context.Provider
      value={{
        itemState,
        setItemState,
        triggerAttributes,
        setTriggerAttributes,
        panelAttributes,
        setPanelAttributes,
        panelStyles,
        setPanelStyles,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

function getPanelHeight(panel) {
  if (!panel) return;
  const panelHeight = panel.children[0].clientHeight;

  return panelHeight;
}

