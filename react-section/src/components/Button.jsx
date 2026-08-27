import React from 'react'

function Button({name,padding,text_size,bg,font_color,text="text-white"}) {
  return (
    <div className='btn'>
        <button className={`${bg} ${text} ${padding} rounded-lg ${text_size} font-semibold  `}>{name}</button>
    </div>
  )
}
export default Button