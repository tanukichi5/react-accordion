import React, {useState, useContext} from 'react'
import { Provider, Context } from "./ItemContext";

const AccordionPanel = (props) => {

  const context = useContext(Context)
  
  return (
    <div className="AccordionPanel" {...context.panelAttributes}>
      {props.children}
    </div>
  );
}

export default AccordionPanel;