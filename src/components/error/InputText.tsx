// ---- store imports
// -- action store functions import 
import { getTextInput } from "@/regex/inputRegex ";
import { useAppSelector } from "@/store/store "
import {  useState } from "react";
// ---- util functions imports
import { findIndexById } from "../utilities/functions";

export default function InputText(props: {id:string}) {
  const {id} = props
  // ----- store selct - convert id -
  const TextInputInfo = useAppSelector(state => state.textField)
  const currentInfo = TextInputInfo[findIndexById(TextInputInfo, id)]
// ------ action functions ------
  const [text, setText] = useState('')
  return (
    <>
      <div className="col-span-6">
        <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
          {currentInfo.label}
        </label>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type={getTextInput(currentInfo.label).type}
          pattern={getTextInput(currentInfo.label).pattern}
          title={getTextInput(currentInfo.label).title}
          name={id}
          minLength={1}
          placeholder={"please tap your text here "}
          id={id}
          className="m-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  )
}