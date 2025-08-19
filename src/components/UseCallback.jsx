import { useCallback,useState } from "react"
import Button from "./Button"
const UseCallback = () => {
    let [count, setCount] = useState(0)
     let increment = useCallback(() => {
         console.log("increment");
        setCount((pre)=>pre+1);
    },[])
    let decrement = useCallback(() => {
        console.log("decrement");
        setCount((pre) => pre-1);
    },[])
  return (
    <div><h1>{count}</h1>
          <Button onClick={increment}>Increment</Button>
          <Button onClick={decrement}>Decrement</Button>
      </div>
  )
}

export default UseCallback