import { useState } from "react";
// ---- store imports
// -- action store functions import 
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/store ";
// -- reducers import
import { removeBlockFiled } from "@/store/reducers/blockReducer ";
import { removeSelectInput, addnewLabel, removeSelectInputLabel, updateSelectInputLabel, addnewEmptyLabel } from "@/store/reducers/selectInputReducer ";
// ---- components imports 
import ListValues from "../others/ListValues";
import Save from "../others/Save";
import InputChange from "../utilities/block/InputChange";
// -- icons imports 
import { PencilIcon, PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
// ---- util functions imports
import { findIndexById, newId } from "../utilities/functions";
// types imports 
import { SelectInputState } from "@/constants/types/interfaces ";

export default function SelectInput(props: SelectInputState) {
  const dispatch = useDispatch()
  const {id, label, options} = props

// ----- store selct - convert id -
  const SelectInputInfo = useAppSelector(state => state.selectInput)
  const currentInfo = SelectInputInfo[findIndexById(SelectInputInfo, id)]

// ----- local - states -
  const [Options, setOptions] = useState(currentInfo?.options)
  const [Label  , setLabel  ] = useState(currentInfo?.label)
  const [edit   , setEdit   ] = useState(true)

// ------ action functions ------
  function handleEdit(){
    setEdit(!edit)
  }
  function handleUpdate() {
    handleEdit()
  }
  function handleRemove() {
    dispatch(removeSelectInput(currentInfo?.id))
    dispatch(removeBlockFiled(currentInfo.id))
  }
  function handleCreateLabel(){
    const createId =  newId()
    dispatch(addnewEmptyLabel({id: currentInfo.id, valueId: createId}))
  }

  return (
    <div className="col-span-6 flex flex-col">
      <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
        {Label || label}
      </label>
      <select
        id={`select-${id}`}
        name={`select-${id}`}
        className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        {currentInfo && currentInfo.options.map((option,index) => {
          return (
            <option key={index} value={option?.value}>
              {option?.label}
            </option>
          )
        })}
         {options && options.map((option,index) => {
          return (
            <option key={index} value={option?.value}>
              {option?.label}
            </option>
          )
        })}
      </select>
      {currentInfo &&   
        <div className="flex flex-row" >
          {edit ? 
            <PencilIcon className="cursor-pointer" width={25} height={25} color="gray" onClick={handleEdit} /> 
          :
            <div> 
              <InputChange func={setLabel} value={Label} />
                {currentInfo && currentInfo.options.map((option, index) => {
                  function handleRemoveLabel(){
                    dispatch(removeSelectInputLabel({id: currentInfo?.id, index}))
                  }
                  function handleAddLabel(_value: string){
                    const createId = newId()
                    dispatch(addnewLabel({id: currentInfo?.id, labelId: _value, valueId:createId}))
                    setOptions([...Options, {label: _value, value: createId}])
                  }
                  function handleUpdateLabel(_value: string, _newLabel: string){
                    dispatch(updateSelectInputLabel({id: currentInfo?.id, labelvalue: _value, newLabel: _newLabel}))
                  }
                return (
                  <ListValues key={index} option={option} handleRemoveLabel={handleRemoveLabel} handleAddLabel={handleAddLabel} handleUpdateLabel={handleUpdateLabel} />
                )
               } )}
              <Save func={handleUpdate}/>
            </div>
          }
          <div className="flex flex-row " >
            {currentInfo.options.length < 1 &&  <PlusCircleIcon  width={25} height={25} color="blue" onClick={() => handleCreateLabel()} />}
            <TrashIcon className="cursor-pointer" width={25} height={25} color='red' onClick={handleRemove} />
          </div>
        </div>
      }
    </div>
  )
}