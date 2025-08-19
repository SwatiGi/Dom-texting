import React from 'react'
// import Button from '../Button'

import MyParagraph from "./MyParagraph"

const DemoOutput = ({ showParagraph, children }) => {
  console.log("DemoOutput Running")
  return (
    <>
      <MyParagraph>{showParagraph?"This is new":""}</MyParagraph>
      {/* {showParagraph ? <p>This is  {showParagraph?"True":"False"}</p>:<p>This is {showParagraph?"True":"False"}</p>} */}
      {/* <h1>{showParagraph?"True":"False"}</h1>
      <p>{showParagraph?children:"This set paragraph"}</p> */}
      {/* <Button>Toggle para</Button> */}
      </>
  )
}

export default React.memo(DemoOutput)