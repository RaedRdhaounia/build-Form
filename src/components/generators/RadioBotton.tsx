import { useState } from "react";
// ---- store imports
// -- action store functions import 
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/store ";
// -- reducers import
import { removeBlockFiled } from "@/store/reducers/blockReducer ";
// ---- components imports 
import ListValues from "../others/ListValues";
import Save from "../others/Save";
import InputChange from "../utilities/block/InputChange";
// -- icons imports 
import { PencilIcon, PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
// ---- util functions imports
import { findIndexById, newId } from "../utilities/functions";
// types imports 
import { RadioButtonState } from "@/constants/types/interfaces ";
import { removeRadioButton, addnewEmptyLabel ,addnewLabel, removeRadioButtonLabel, updateRadioButton, updateRadioButtonLabel } from "@/store/reducers/radioBottonReducer ";

export default function RadioBotton(props: RadioButtonState) {
  const dispatch = useDispatch()
  const {id, label, options} = props

// ----- store selct - convert id -
  const RadioBottonInfo = useAppSelector(state => state.radioButton)
  const currentInfo = RadioBottonInfo[findIndexById(RadioBottonInfo, id)]

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
    dispatch(removeRadioButton(currentInfo?.id))
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
        {currentInfo && currentInfo.options.map((option,index) => {
          return (
            <div key={index} className="justify-start flex content-center ">
              <input 
                type="radio"
                id  ={`radioBotton-${currentInfo.id}`}
                name={`radioBotton-${currentInfo.id}`}
                value={option?.value}
              />
              <label className="ml-3 text-black" >{option?.label}</label>
            </div>
          )
        })}
         {! currentInfo  && options && options.map((option,index) => {
          return (
            <div   key={index}>
              <input 
                type="radio"
                id  ={`radioBotton-${id}`}
                name={`radioBotton-${id}`}
                value={option?.label}
              />
              <label className="ml-3 text-black" >{option?.label}</label>
            </div>
          )
        })}
      
      {currentInfo &&   
        <div className="flex flex-row" >
          {edit ? 
            <PencilIcon className="cursor-pointer" width={25} height={25} color="gray" onClick={handleEdit} /> 
          :
            <div> 
              <InputChange func={setLabel} value={Label} />
                {currentInfo && currentInfo.options.map((option, index) => {
                  function handleRemoveLabel(){
                    dispatch(removeRadioButtonLabel({id: currentInfo?.id, index}))
                  }
                  function handleAddLabel(_value: string){
                    const createId = newId()
                    dispatch(addnewLabel({id: currentInfo?.id, labelId: _value, valueId:createId}))
                    setOptions([...Options, {label: _value, value: createId}])
                  }
                  function handleUpdateLabel(_value: string, _newLabel: string){
                    dispatch(updateRadioButtonLabel({id: currentInfo?.id, labelvalue: _value, newLabel: _newLabel}))
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