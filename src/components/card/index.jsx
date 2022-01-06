import React from 'react'

function Card({ heigth, width, direction, justify, children }) {
  return (
    <div
      className={`bg-blue-400 h-auto w-auto ${heigth} ${width} flex ${direction} ${justify} rounded-lg shadow-xl bg-opacity-30 p-4 animate-inDown md:animate-inDownSlash`}
    >
      {children}
    </div>
  )
}

export default Card
