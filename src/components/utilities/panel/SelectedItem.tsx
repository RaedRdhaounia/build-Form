import AddFiled from "@/components/others/AddField ";
import ConvertType from "@/components/others/ConvertType ";
import { FieldType } from "@/constants/types/interfaces ";
import { addBlockFiled } from "@/store/reducers/blockReducer ";
import { addCheckBox } from "@/store/reducers/checkBoxReducer ";
import { addFiled } from "@/store/reducers/fieldReducer ";
import { addInputText } from "@/store/reducers/inputFiledReducer ";
import { addSelectInput } from "@/store/reducers/selectInputReducer ";
import { useAppSelector } from "@/store/store ";
import { DragEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { newId } from "../functions";
import { Size, useWindowSize } from "../SizeWindow";

export default function SelectedItem(props:{type:FieldType, id:string, setOpen:(open:boolean)=>void}) {
  const dispatch = useDispatch()
  const size: Size = useWindowSize();
  const WindowSize = size !=undefined && typeof(size.width) === "number" &&  size.width > 1200
  const {id, type, setOpen} = props;
  const BlockIdInfo = useAppSelector(state => state.block)
  const [BlockId, setBlockId] = useState(BlockIdInfo[0].id)
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
        break;
      case "select":
        dispatch(addSelectInput({ id:createId, label: "label", options:[{label:"test", value:"val"}]}))
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

  return (!WindowSize ? 
    <div className="flex justify-center flex-col">
      <AddFiled func={handleAdd} />
      <select
        id={`select-block`}
        name={`select-block`}
        className="mt-2 block rounded-md border-0 bg-white py-1.5 text-center text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        {BlockIdInfo && BlockIdInfo.map((option,index) => {
          return (
            <option key={index} onChange={() => setBlockId(option.id)} className="text-center" value={option.id}>
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
