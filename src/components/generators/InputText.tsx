// ---- store imports
import { useState } from "react";
// -- action store functions import 
import { useDispatch } from "react-redux"
import { useAppSelector } from "@/store/store "
// -- reducers import
import { removeBlockFiled } from "@/store/reducers/blockReducer ";
import { removeInputText, updateInputText } from "@/store/reducers/inputFiledReducer ";
// ---- components imports 
import Save from "../others/Save";
import InputChange from "../utilities/block/InputChange";
// -- icons imports 
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
// ---- util functions imports
import { findIndexById } from "../utilities/functions";
// types imports 
import { InputFieldState } from "@/constants/types/interfaces ";

export default function InputText(props: InputFieldState) {
  const dispatch = useDispatch()
  const {id, label, value} = props

// ----- store selct - convert id -
  const TextInputInfo = useAppSelector(state => state.textField)
  const currentInfo = TextInputInfo[findIndexById(TextInputInfo, id)]

// ----- local - states -
  const [textInputInfo, setTextInputInfo] = useState(currentInfo)
  const [Label, setLabel] = useState<string>(textInputInfo?.label)
  const [edit, setEdit] = useState(false)

// ------ action functions ------
  function handleEdit(){
    setEdit(!edit)
  }
  function handleUpdate() {
    if (textInputInfo?.value !== undefined) {
      dispatch(updateInputText({index:currentInfo.id, newfield:{...textInputInfo, value, label:Label}}))
    }
    handleEdit()
  }
  function handleRemove() {
    dispatch(removeInputText(textInputInfo?.id))
    dispatch(removeBlockFiled(textInputInfo.id))
  }
  function HandleChange(value: string) {
    setTextInputInfo({...textInputInfo, value})
  }

  return (
    <div>
      <div className="col-span-6">
        <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
          {currentInfo?.label || label}
        </label>
        <input
          onChange={(e) => HandleChange(e.target.value)}
          value={textInputInfo?.value || value}
          type="text"
          name={id}
          placeholder={"please tap your text here "}
          id={id}
          className="m-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      {currentInfo &&   
        <div className={edit ? "justify-between flex items-baseline align-baseline ": "flex items-baseline align-baseline"} >
          {!edit ? 
            <PencilIcon className="cursor-pointer" width={25} height={25} color="gray" onClick={handleEdit} />
          :
            <div> 
              <InputChange func={setLabel} value={Label} />
              <Save func={handleUpdate}/>
            </div>
          }
          <TrashIcon className="cursor-pointer" width={25} height={25} color='red' onClick={handleRemove} />
        </div>
      }
    </div>
    
  )
}