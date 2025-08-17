import React from 'react'

const ThemeToggle = ({ toggle }) => {
  console.log("Theme render")
  return (
      <div style={{width:"100px",height:"100px",background:toggle?"pink":"red"}}>
      
      </div>
  )
}

export default ThemeToggle