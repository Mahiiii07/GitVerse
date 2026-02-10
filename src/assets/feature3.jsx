import React from 'react'

const Feature3 = ({height = 24 , width = 24 , className}) => {
  return (
   <svg
                className={className}
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                height={height}
                width={width}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
  )
}

export default Feature3