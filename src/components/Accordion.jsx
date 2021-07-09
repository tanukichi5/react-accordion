import React, {useContext} from 'react'
import Provider, { Context } from './AccordionContext';


const Accordion = (props) => {
  const options = useContext(Context)
  console.log(options)
  return (
    <Provider>
      <div className="Accordion">
        {props.children}
      </div>
    </Provider>
  );
}

export default Accordion;