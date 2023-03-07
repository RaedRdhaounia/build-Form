import ConvertType from "@/components/others/ConvertType ";
import { FieldType } from "@/constants/types/interfaces ";
import { addFiled } from "@/store/reducers/fieldReducer ";
import { DragEvent, useState } from "react";
import { useDispatch } from "react-redux";

export default function SelectedItem(props:{type:FieldType, id:string, setOpen:(open:boolean)=>void}) {
  const dispatch = useDispatch()
  const {id, type, setOpen} = props;
  const [dragElement, setDragElemnt] = useState("")
  function handleOnDrag(event: DragEvent<HTMLDivElement>){
    dispatch(addFiled(type))
    setOpen(false)
    setDragElemnt(type)
    event.dataTransfer.setData("dragField", type)
  }

  return (
    <div
      draggable
      onDrag={(event)=> handleOnDrag(event)}
      className="p-4 border-dotted border-black border-2"
    >
      <ConvertType type={type} id={id} />
    </div>
  )
}

function handleOnDrag(_event: React.DragEvent, _wigetType:string){

}
