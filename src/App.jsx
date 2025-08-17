// import {useState,memo} from 'react'

// import ThemeToggle from './components/ThemeToggle'
// import NotUse from './components/NotUse'

import UseCallback from './components/UseCallback'
// import Count from './components/Count'

const App = () => {
    // console.log("app render")
    // let [count, setCount] = useState(0);
    // let bioData = useMemo(() => {
    //     return{
    //     name: "Swati",
    //     age:"26",
    // }
    // },[])
   
    
  return (
      <>
          {/* <NotUse/> */}
    <UseCallback/>
          
          <br />
          <br />
         {/* <ThemeToggle toggle={toggle}/> */}
          {/* <h1>{count}</h1>
          <button onClick={()=>setCount(++count)}>Increment</button>
          <Count bioData={bioData}/> */}
     </>
  )
}

export default App