import React, { useContext, useState, useRef } from "react";
import Provider, { Context } from "./AccordionContext";

const Accordion = (props) => {

  const childrenWithProps = React.Children.map(
    props.children,
    (child, i) => {
      // 各子要素をクローンしつつ index を渡す
      // console.log(i)
      return React.cloneElement(child, { panelIndex: i })
    }
  )

  return (
    <Provider>
      <Context.Consumer>
        {(options) => {
          const overrideOptions = {
            defaultExpandedPanels: props.defaultExpandedPanels ?
              props.defaultExpandedPanels :
              options.accordionState.defaultExpandedPanels,
            multipleOpen: !(typeof props.multipleOpen === "undefined") ?
              props.multipleOpen :
              options.accordionState.multipleOpen,
          }
          Object.assign(options.accordionState, overrideOptions || {})
          return (
            <>
              <div className="Accordion">{childrenWithProps}</div>
            </>
          );
        }}
      </Context.Consumer>
    </Provider>
  );
};

export default Accordion;
