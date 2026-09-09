import React from 'react'

function Button({
  name,
  padding,
  text_size,
  bg,
  text = "text-white",
  onClick
}) {
  return (
    <div className='btn'>
      <button
        onClick={onClick}
        className={`${bg} ${text} ${padding} rounded-lg ${text_size} font-semibold`}
      >
        {name}
      </button>
    </div>
  )
}

export default Button