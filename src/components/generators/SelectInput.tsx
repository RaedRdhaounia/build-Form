export default function SelectInput(props: {label: string, id: string, options:string[]}) {
  const {id, label, options} = props
  return (
    <div className="col-span-6">
      <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <select
        id={`select-${id}`}
        name={`select-${id}`}
        className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        {options.map((option,index) => {
          return (
            <option key={index} >{option}</option>
          )
        })}
      </select>
    </div>
  )
}