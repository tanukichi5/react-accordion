import React from 'react'
import Provider, {Context} from './Context'
// import ContextB from './ContextB'

// const ContextA = () => <ContextB/>

// export default ContextA


const ContextA = (props) => {
  return (
    <Provider>
      <div className="A">
        {props.children}
      </div>
    </Provider>
  );
}

export default ContextA;