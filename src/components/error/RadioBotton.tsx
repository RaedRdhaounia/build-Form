// ---- store imports
import { useAppSelector } from "@/store/store ";
// ---- util functions imports
import { findIndexById } from "../utilities/functions";
// types imports 
import { RadioButtonState } from "@/constants/types/interfaces ";
import { ChangeEvent, useState } from "react";

export default function RadioBotton(props: RadioButtonState) {
  const { id } = props

// ----- store selct - convert id -
  const RadioBottonInfo = useAppSelector(state => state.radioButton)
  const currentInfo = RadioBottonInfo[findIndexById(RadioBottonInfo, id)]

// ----- local - states -
  const [ value  , setValue  ] = useState<string>()
  const [ errors , setErrors ] = useState<{label ?:string}>({});

// ------ action functions ------
  function HandleChange(_event: ChangeEvent<HTMLInputElement>) {
    setValue(_event.target.value)
    console.log("value", value)
    if (!value) {
      setErrors({label: `please chose one of the following at ${currentInfo.label} `})
    } else {
      setErrors({label: ""})
    }
  }

  return (
    <div className="col-span-6 flex flex-col">
      <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
        { currentInfo.label }
      </label>
        {currentInfo.options.map((option,index) => {
          return (
            <div key={index} className="justify-start flex content-center ">
              <input 
                onChange={HandleChange}
                type="radio"
                id  ={`radioBotton-${currentInfo.id}`}
                name={`radioBotton-${currentInfo.id}`}
                value={option?.value}
              />
              <label className="ml-3 text-black" >{option?.label}</label>
              {errors.label && <p className="text-red-600" >{errors.label }</p>}
            </div>
          )
        })}
    </div>
  )
}