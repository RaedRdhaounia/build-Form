import { InputFieldState } from "@/constants/types/interfaces ";
import { removeBlockFiled } from "@/store/reducers/blockReducer ";
import { removeInputText, updateInputText } from "@/store/reducers/inputFiledReducer ";
import { useAppSelector } from "@/store/store "
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useDispatch } from "react-redux"
import Save from "../others/Save";
import InputChange from "../utilities/block/InputChange";

function findIndexById(_arr:InputFieldState[] , _id: string) {
  return _arr.findIndex(obj => obj.id === _id);
}

export default function InputText(props:{label: string, value: string, id:string}) {
  const {id, label, value} = props
  const dispatch = useDispatch()
  const TextInputInfo = useAppSelector(state => state.textField)
  const currentInfo = TextInputInfo[findIndexById(TextInputInfo, id)]
  const [textInputInfo, setTextInputInfo] = useState(currentInfo)
  const [Label, setLabel] = useState<string>(textInputInfo?.label)
  const [edit, setEdit] = useState(false)
  function handleEdit(){
    setEdit(!edit)
  }
  function handleUpdate() {
    if (textInputInfo?.value !== undefined) {
      dispatch(updateInputText({index:currentInfo.id, newfield:{...textInputInfo, value, label:Label}}))
    }
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
          {textInputInfo?.label || label}
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
            <PencilIcon className="cursor-pointer" width={25} height={25} color="gray" onClick={handleEdit} /> :
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