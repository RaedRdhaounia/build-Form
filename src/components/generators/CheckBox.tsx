import { useState } from "react"
// ---- store imports
// -- action store functions import
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/store "
// -- reducers import
import { removeBlockFiled } from "@/store/reducers/blockReducer ";
import { removeCheckBox, updateCheckBox } from "@/store/reducers/checkBoxReducer ";
// ---- components imports 
import Save from "../others/Save";
import InputChange from "../utilities/block/InputChange";
// -- icons imports 
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
// ---- util functions imports
import { findIndexById } from "../utilities/functions";
// types imports 
import { CheckBoxState } from "@/constants/types/interfaces ";

export default function CheckBox(props:CheckBoxState) {
  const dispatch = useDispatch()
  const {description, id, label, value} = props

// ----- store selct - convert id -
  const CheckBocInfo = useAppSelector(state => state.checkbox)
  const currentInfo = CheckBocInfo[findIndexById(CheckBocInfo, id)]

// ----- local - states -
  const [checked     , setChecked     ] = useState<boolean>(value)
  const [edit        , setEdit        ] = useState<boolean>(false)
  const [checkBoxInfo, setCheckBoxInfo] = useState<CheckBoxState>(currentInfo)
  const [Label       , setLabel       ] = useState<string>(checkBoxInfo?.label      )
  const [Description , setDescription ] = useState<string>(checkBoxInfo?.description)

// ------ action functions ------
  function handelCheck() {
    if (checkBoxInfo?.value !== undefined) {
      setCheckBoxInfo({...checkBoxInfo, value: !checkBoxInfo.value})
    } else {
      setChecked(!checked)
    }
  }
  function handleEdit(){
    setEdit(!edit)
  }
  function handleUpdate() {
    if (checkBoxInfo?.value !== undefined) {
      dispatch(updateCheckBox({index:currentInfo.id, newfield:{...checkBoxInfo, label: Label, description: Description}}))
    }
    handleEdit()
  }
  function handleRemove() {
    dispatch(removeCheckBox(checkBoxInfo?.id))
    dispatch(removeBlockFiled(checkBoxInfo.id))
  }

  return (
    <fieldset className="col-span-6">
      <div className="mt-4 space-y-4 flex justify-between flex-col">
        <div className="flex items-start">
          <div className="flex h-6 items-center">
            <input
              onChange={handelCheck}
              checked={checkBoxInfo?.value || checked}
              id={currentInfo?.id || id}
              name={`checkbox-${id}`}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="ml-3">
            <label htmlFor="candidates" className="text-sm font-medium leading-6 text-gray-900">
              {currentInfo?.label || label}
            </label>
            <p className="text-sm text-gray-500">{currentInfo?.description || description }</p>
          </div>
        </div>
        {currentInfo &&   
          <div className="flex" >
            {!edit ? 
              <PencilIcon className="cursor-pointer" width={25} height={25} color="gray" onClick={handleEdit} />
            :
              <div className="flex flex-col"> 
                <InputChange func={setLabel} value={Label} />
                <InputChange func={setDescription} value={Description} />
                <Save func={handleUpdate}/>
              </div>
            }
            <TrashIcon className="cursor-pointer" width={25} height={25} color='red' onClick={handleRemove} />
          </div>
        }
        
      </div>
    </fieldset>
  )
}