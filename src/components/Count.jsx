import React, { useRef ,memo} from 'react'

const Count = () => {
    let count = useRef(0);
    console.log(count)
  return (
    <h1 style={{color:"white", border:"1px solid red", padding:"10px"}}>{count.current++} Times render</h1>
  )
}

export default memo(Count)