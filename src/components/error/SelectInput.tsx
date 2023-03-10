// ---- store imports
import { useAppSelector } from "@/store/store ";
// ---- util functions imports
import { findIndexById } from "../utilities/functions";
// types imports 
import { SelectInputState } from "@/constants/types/interfaces ";

export default function SelectInput(props: SelectInputState) {
  const { id } = props

// ----- store selct - convert id -
  const SelectInputInfo = useAppSelector(state => state.selectInput)
  const currentInfo = SelectInputInfo[findIndexById(SelectInputInfo, id)]


// ------ action functions ------

  return (
    <div className="col-span-6 flex flex-col">
      <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
        {currentInfo.label}
      </label>
      <select
        id={`select-${id}`}
        name={`select-${id}`}
        className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        {currentInfo.options.map((option,index) => {
          return (
            <option key={index} value={option?.value}>
              {option?.label}
            </option>
          )
        })}
      </select>
    </div>
  )
}