import React, { useContext, useState, useRef } from "react";
import Provider, { Context } from "./AccordionContext";

import AccordionItem from "./AccordionItem";
import AccordionTrigger from "./AccordionTrigger";
import AccordionPanel from "./AccordionPanel";

const Accordion = (props) => {
  const childrenWithProps = React.Children.map(props.children, (child, i) => {
    // 各子要素をクローンしつつ index を渡す
    // console.log(i)
    return React.cloneElement(child, { panelIndex: i });
  });

  return (
    <Provider>
      <Context.Consumer>
        {(options) => {
          const overrideOptions = {
            defaultExpandedPanels: !(typeof props.defaultExpandedPanels === "undefined")
              ? props.defaultExpandedPanels
              : options.accordionState.defaultExpandedPanels,
            multipleExpanded: !(typeof props.multipleExpanded === "undefined")
              ? props.multipleExpanded
              : options.accordionState.multipleExpanded,
            easing: !(typeof props.easing === "undefined")
              ? props.easing
              : options.accordionState.easing,
            duration: !(typeof props.duration === "undefined")
              ? props.duration
              : options.accordionState.duration,
            notTransition: !(typeof props.notTransition === "undefined")
              ? props.notTransition
              : options.accordionState.notTransition,
            content: !(typeof props.content === "undefined")
              ? props.content
              : options.accordionState.content,
            onOpen: !(typeof props.onOpen === "undefined")
              ? props.onOpen
              : options.accordionState.onOpen,
            onClose: !(typeof props.onClose === "undefined")
              ? props.onClose
              : options.accordionState.onClose,
          };
          Object.assign(options.accordionState, overrideOptions || {});

          return (
            <>
              {/* <div className="Accordion">{childrenWithProps}</div> */}
              <div className="Accordion">
                {options.accordionState.content.map((content, index) => {
                  return (
                    <AccordionItem panelIndex={index} key={index}>
                      <div className="AccordionItem__header">
                        <AccordionTrigger>{content.title}</AccordionTrigger>
                      </div>
                      <AccordionPanel>
                        <div
                          className="AccordionPanel__content"
                          dangerouslySetInnerHTML={{
                            __html: content.detail,
                          }}
                        ></div>
                      </AccordionPanel>
                    </AccordionItem>
                  );
                })}
              </div>
            </>
          );
        }}
      </Context.Consumer>
    </Provider>
  );
};

export default Accordion;
