import { useState } from "react"
// ---- components imports 
import InputChange from "../utilities/block/InputChange"
// ---- icons imports 
import { BookmarkSquareIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline"
// types imports 
import { ListValuesP } from "@/constants/types/types "

 /*
/  / ----- Component ListValues created to create, remove and update the option label and/or value of the select input and redio botton 
 */

export default function ListValues(props : ListValuesP) {
  const {option, handleRemoveLabel, handleAddLabel, handleUpdateLabel} = props
// ----- local - states -
  const [Label, setLabel ] =useState(option?.label)
  return (
    <div>
      <label>
        options list
      </label>
      <InputChange func={setLabel} value={Label}/>
      <div className="flex  content-baseline">
        <BookmarkSquareIcon width={25} height={25} color="green" onClick={() => handleUpdateLabel(option.value,Label)} />
        <PlusIcon           width={25} height={25} color="blue"  onClick={() => handleAddLabel(Label)} />
        <TrashIcon          width={25} height={25} color="red"   onClick={handleRemoveLabel}  />
      </div>
    </div>
  )
}