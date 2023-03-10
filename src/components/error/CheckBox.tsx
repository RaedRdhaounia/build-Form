import { ChangeEvent, useState } from "react"
// ---- store imports
import { useAppSelector } from "@/store/store "
// ---- util functions imports
import { findIndexById } from "../utilities/functions";
// types imports 
import { CheckBoxState } from "@/constants/types/interfaces ";

export default function CheckBox(props:CheckBoxState) {
  const { id } = props

// ----- store selct - convert id -
  const CheckBocInfo = useAppSelector(state => state.checkbox)
  const currentInfo = CheckBocInfo[findIndexById(CheckBocInfo, id)]

// ----- local - states -
  const [checked , setChecked] = useState<boolean>(false)
  const [errors  , setErrors ] = useState<{label ?:string}>({label: ``});

// ------ action functions ------
  function handelCheck() { 
    setChecked(!checked)
    if (checked) {
      setErrors({label: `please confirme missed check for  ${currentInfo.label}`})
    } else {
      setErrors({label: ""})
    }
  }

  return (
    <fieldset className="col-span-6">
      <div className="mt-4 space-y-4 flex justify-between flex-col">
        <div className="flex items-start">
          <div className="flex h-6 items-center">
            <input
              onChange={handelCheck}
              checked={checked}
              id={currentInfo?.id || id}
              name={`checkbox-${id}`}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="ml-3">
            <label htmlFor="candidates" className="text-sm font-medium leading-6 text-gray-900">
              {currentInfo.label}
            </label>
            <p className="text-sm text-gray-500">{currentInfo.description}</p>
            {errors.label !== "" && <p className="text-red-600" >{errors.label }</p> }
          </div>
        </div>
      </div>
    </fieldset>
  )
}