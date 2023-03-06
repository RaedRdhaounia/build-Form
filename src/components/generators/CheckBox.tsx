export default function CheckBox(props:{label: string, description:string, id:string}) {
    const {description, id, label} = props
  return (
    <fieldset>
      <div className="mt-4 space-y-4">
        <div className="flex items-start">
          <div className="flex h-6 items-center">
            <input
              id={id}
              name={`checkbox-${id}`}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="ml-3">
            <label htmlFor="candidates" className="text-sm font-medium leading-6 text-gray-900">
              {label}
            </label>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </fieldset>
  )
}