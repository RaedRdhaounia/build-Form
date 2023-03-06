export default function InputText(props:{label: string, name: string, id:string}) {
  const {id, label, name} = props
  return (
    <div className="col-span-6">
      <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <input
        type="text"
        name={id}
        placeholder={name}
        id={id}
        className="m-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  )
}