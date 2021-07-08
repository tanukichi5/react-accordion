import React, {createContext} from 'react'

export const Context = createContext()

const Provider = (props) => {
  const options = {
    name: 'セイラ',
    age: '17',
    hobby: 'キャンプ'
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
