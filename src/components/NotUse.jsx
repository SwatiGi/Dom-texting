import {memo, useState} from 'react'

const NotUse = () => {
    console.log("NotUse")
    let [login, setLogin] = useState(false)
    
  return (
      <>
      <h1>NotUse</h1>
      <h1>{login?"Login":"Log out"}</h1>
      <button onClick={()=>setLogin(!login)}>Login Button</button>
      </>
  )
}

export default memo(NotUse)