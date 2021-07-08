import React from 'react'
// import ContextB from './ContextB'

// const ContextA = () => <ContextB/>

// export default ContextA


const ContextA = (props) => {
  return (
    <div className="A">
      {props.children}
    </div>
  );
}

export default ContextA;