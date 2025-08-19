import React from 'react'

const Button = ({ onClick, children }) => {
  console.log("Button running")
  return (
      <button onClick={onClick} type={children||'button'} >
          {children||"Button"}
      </button>
  )
}

export default React.memo(Button)