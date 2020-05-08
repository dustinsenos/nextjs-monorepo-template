import React from "react"

export default ({ onClick, children }) => {
 return (
  <button style={{
    padding: '10px',
    color: 'white',
    background: 'tomato',
    borderRadius: '10px'
  }} onClick={onClick}>
    {children}
  </button>
 )
}
