const Card = ({heigth, width, children}) => {
  return (
    <div className={`bg-blue-400 ${heigth} ${width} rounded-lg shadow-xl bg-opacity-30 p-4`}>
      {children}
    </div>
  )
}

export default Card