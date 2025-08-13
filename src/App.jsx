import React, { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const App = () => {
    let [toggle, setToggle] = useState(false);
    console.log("app render")
  return (
      <div>
          <div><h1>This is paragraph</h1>
          {toggle ? <p>This is true</p> : <p>This is false</p>}
          <button onClick={() => setToggle(!toggle)}>Toggle Button</button>
          </div>
          <ThemeToggle toggle={toggle} setToggle={setToggle}/>
      </div>
  )
}

export default App