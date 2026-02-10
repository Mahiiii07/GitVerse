import React from 'react'

const Tick = ({height = 16 , width = 16 , className}) => {
  return (
    // <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 16" className={className}><path fill="currentColor" d="M11.4 6.85a.5.5 0 0 0-.707-.707l-3.65 3.65l-1.65-1.65a.5.5 0 0 0-.707.707l2 2a.5.5 0 0 0 .707 0l4-4z"></path></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 16"><polyline fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} points="2.75 8.75 6.25 12.25 13.25 4.75"></polyline></svg>
  )
}

export default Tick