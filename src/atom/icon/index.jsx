const Icon = ({ icon, description, heigth = 'md:h-8', width = 'md:w-8' }) => {
  return (
    <div className="flex flex-col flex-wrap content-center justify-center">
      <img
        src={icon}
        alt="Icon"
        className={`outline-none md:h-3/4 md:w-3/4 ${heigth} ${width}`}
      />
      <h5>{description}</h5>
    </div>
  )
}

export default Icon
