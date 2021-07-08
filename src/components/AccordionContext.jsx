import React, {createContext} from 'react'

export const Context = createContext()

const Provider = (props) => {
  const options = {
    text: "ほげ"
  }
  // const [user, setUser] = useState({
  //   name: 'セイラ',
  //   age: '17'
  // })
  return (
    <Context.Provider value={options}>
      {props.children}
    </Context.Provider>
  );
}

export default Provider;
