export default function InputChange(props: {value:string, func: (value:string) => void}) {
  const {func, value} = props
  return (
    <input
      value={value}
      className="m-2 text-center block max-w-sm rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      onChange={(e) => func(e.target.value)}
    />
  )
}

