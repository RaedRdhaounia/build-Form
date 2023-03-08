// after fix comonent utilities need to clean up this code
import { RadioButtonState } from "@/constants/types/interfaces "

function Option(props: {value:string, label:string, id: string}){
  const {value, label, id} = props
  return (
    <div className="flex items-center">
      <input
        id={`radio-${value}`}
        name={`radioName-${id}`}
        type="radio"
        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
      />
      <label
        htmlFor="push-everything"
        className="ml-3 block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
    </div>
  )
}

export default function RadioBotton(props: RadioButtonState) {
  const {label, description, options, id} = props
  return (
    <fieldset className="col-span-6">
      <legend className="contents text-sm font-semibold leading-6 text-gray-900">
        {label}
      </legend>
      <p className="text-sm text-gray-500">{description}</p>
      <div className="mt-4 space-y-4">
        {options.map((option, index) => {
            return (
              <Option key={index} {...option} id={id}/>
            )
        })}
      </div>
    </fieldset>
  )
}