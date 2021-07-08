//ReactからuseContextをimport
import React, {useContext} from 'react'
//AppコンポーネントからUserContext, HobbyContextをimport
import {Context} from './Context'

const ContextC = () => {
//useContextの引数に、UserContextやHobbyContextを渡すことによって、
//AppコンポーネントでProviderに渡したvalueの値を変数に代入することが出来る
  const options = useContext(Context)
  // console.log(user)
  return (
    <>
      <p>{options.name}{options.age}歳: 趣味は{options.hobby}です。</p>
    </>
  )
}

export default ContextC