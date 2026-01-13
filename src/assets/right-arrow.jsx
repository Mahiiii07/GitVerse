import React from 'react'

const RightArrow = ({height = 24,width = 24,className}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6 6l6-6m-6-6l6 6" ></path></svg>
  )
}

export default RightArrow