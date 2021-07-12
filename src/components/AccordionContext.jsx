import React, {useState, createContext, useEffect} from 'react'

export const Context = createContext({
  setAccordionState: () => {},
})

const Provider = (props) => {

  const [accordionState, setAccordionState] = useState({
    expandedPanels: new Set(),
    defaultExpandedPanels: [],
    multipleOpen: true
  });


  return (
    <Context.Provider value={{
      accordionState,
      setAccordionState
    }}>
      {props.children}
    </Context.Provider>
  );
}

export default Provider;