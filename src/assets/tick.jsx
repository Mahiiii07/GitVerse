import React from 'react'

const Tick = ({height = 16 , width = 16 , className}) => {
  return (
    
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 16" className={className}><polyline fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} points="2.75 8.75 6.25 12.25 13.25 4.75"></polyline></svg>
  )
}

export default Tick