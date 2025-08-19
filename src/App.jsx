import React, { memo,useState,useCallback, useMemo } from 'react'
import Button from './component/Button'
import DemoOutput from './component/Demo/Demo'
import DemoList from './component/Demo/DemoList'

const App = () => {
  let [listTitle, setListTitle] = useState("My List")
  console.log("app runnig")
  // let [showParagraph, setShowParagraph] = useState(false);
  // let [allowToggle, setAllowTogle] = useState(false);

  // let handleParagraph = useCallback(() => {
  //   console.log("para btn")
  //   if (allowToggle) {
  //     setShowParagraph((pre) => !pre)
  //   }
  // }, [allowToggle]);
  // let allowToggleHandler = useCallback(() => {
  //   console.log("toggle btn")
  // setAllowTogle((pre)=>!pre)
  // },[])
  let changeTitleHandler = useCallback(() => {
  setListTitle("New Title")
  }, [])
  let listItems= useMemo(()=>[5,3,1,10,9],[])
  return (
    <div>
      <h1>Hi there!</h1>
      {/* <DemoOutput showParagraph={false}>This is Chldren</DemoOutput>
      <h1>{showParagraph?"Para show":"Not show"}</h1>
      <Button onClick={handleParagraph}>Toggle Paragraph</Button>
      <h1>{allowToggle?"True":"False"}</h1>
      <Button onClick={allowToggleHandler}>Allow toggle</Button> */}
      
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}> Change List Title</Button>
    </div>
  )
}

export default memo(App)