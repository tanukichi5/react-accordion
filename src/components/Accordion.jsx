import React, {useContext} from 'react'
import Provider, { Context } from './AccordionContext';


const Accordion = (props) => {
  const options = useContext(Context)
  console.log(options)
  return (
    <Provider>
        {props.children}
    </Provider>
  );
}

export default Accordion;