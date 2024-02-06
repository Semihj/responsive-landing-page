import React from 'react'

const Button = ({text,color,color2}) => {
  return (
    
      <button className={`border-[#C7C7C7] bg-[${color}] text-white border min-w-[160px]  h-14 rounded-[60px] hover:bg-[${color2}]   transition-all duration-700 `}>{text} </button>
    
  )
}

export default Button
