const Card = ({heigth, width, direction, justify, children}) => {
  return (
    <div className={`bg-blue-400 h-auto w-auto ${heigth} ${width} flex ${direction} ${justify} rounded-lg shadow-xl bg-opacity-30 p-4`}>
      {children}
    </div>
  )
}

export default Card