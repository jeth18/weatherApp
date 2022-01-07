export default function Input({
  type,
  placeholder,
  icon = null,
  handleChange,
  inputVacio
}) {
  return (
    <div className="flex justify-center">
      {icon ? (
        <div className={`flex flex-row bg-indigo-300 opacity-2 rounded-tl-md rounded-bl-md outline-none p-1 shadow-md ${inputVacio ? 'border-2 border-red-600' : ''}`}>
          <div className=" text-blue-900 flex justify-center items-center h-full w-3">
            {icon}
          </div>
          <input
            type={type}
            placeholder={placeholder}
            className="bg-transparent outline-none w-auto p-1 text-gray-700 font font-semibold"
            onChange={handleChange}
          />
        </div>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="text-black w-auto h-5 bg-indigo-300 opacity-2 rounded-md p-2 outline-none shadow-lg"
        />
      )}
    </div>
  )
}
