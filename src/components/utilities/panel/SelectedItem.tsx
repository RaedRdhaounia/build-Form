import { DragEvent, useState } from "react";
// -- action store functions import 
import { useAppSelector } from "@/store/store ";
import { useDispatch } from "react-redux";
// -- reducers import
import { addBlockFiled } from "@/store/reducers/blockReducer ";
import { addCheckBox } from "@/store/reducers/checkBoxReducer ";
import { addFiled } from "@/store/reducers/fieldReducer ";
import { addInputText } from "@/store/reducers/inputFiledReducer ";
import { addSelectInput } from "@/store/reducers/selectInputReducer ";
// ---- components imports 
import AddFiled from "@/components/others/AddField ";
import ConvertType from "@/components/others/ConvertType ";
// ---- util functions imports
import { newId } from "../functions";
import { Size, useWindowSize } from "../SizeWindow";
// types imports 
import { selectItemdP } from "@/constants/types/types ";
import { addRadioButton } from "@/store/reducers/radioBottonReducer ";

 /*
/  / ----- Component SelectedItem created to dispatch add new filed from the panel as 2 method drag with widh screen more than 1200px and click methode with other devices
 */

export default function SelectedItem(props:selectItemdP) {
  const dispatch = useDispatch()
  const {id, type, setOpen} = props;
// interface sizing
  const size: Size = useWindowSize();
  const WindowSize = size !=undefined && typeof(size.width) === "number" &&  size.width > 1200
// ----- store selct - convert id -
  const BlockIdInfo = useAppSelector(state => state.block)
// ----- local - states -
  const [BlockId, setBlockId] = useState(BlockIdInfo[0].id)

// ------ action functions ------
  function handleAdd(){
    const createId = newId()
    switch (type) {
      case "text":
        dispatch(addInputText({id:createId, label: "label", value:""}))
        break;
      case "checkbox":
        dispatch(addCheckBox({description:'description', id:createId, label: "label", value:false}))
        break;
      case "radio":
        dispatch(addRadioButton({description:'description',label: "radio botton label", id:createId, options:[ {label:"option1", value:newId()}, {label:"option2", value:newId()}, {label:"option3", value:newId()} ] }))
        break;
      case "select":
        dispatch(addSelectInput({ id:createId, label: "select input label", options:[ {label:"option1", value:newId()}, {label:"option2", value:newId()}, {label:"option3", value:newId()} ]}))
        break;
      default:
        break;
    }
    dispatch(addBlockFiled({index: BlockId, field: {id: createId, type: type}}))
    setOpen(false)
  }
  function handleOnDrag(event: DragEvent<HTMLDivElement>){
    if (WindowSize) {
      dispatch(addFiled(type))
      event.dataTransfer.setData("dragField", type)
    }
    setOpen(false)
  }

  return (
  !WindowSize ? 
    <div className="flex justify-center flex-col">
      <AddFiled func={handleAdd} />
      <select
        onChange={(e) => setBlockId(e.target.value)}
        id={`select-block`}
        name={`select-block`}
        className="mt-2 block rounded-md border-0 bg-white py-1.5 text-center text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        {BlockIdInfo && BlockIdInfo.map((option,index) => {
          return (
            <option key={index} className="text-center" value={option.id}>
              {option.label}
            </option>
          )
        })}
      </select>
    </div>
  :
    <div
      draggable={WindowSize}
      onDrag={(event)=> handleOnDrag(event)}
      className="p-4 border-dotted border-black border-2"
    >
      <ConvertType type={type} id={id} />
    </div>
  )
}