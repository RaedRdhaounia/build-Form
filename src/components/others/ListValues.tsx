import { BookmarkSquareIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { useDispatch } from "react-redux"
import InputChange from "../utilities/block/InputChange"

type ListValuesP = {
  key: number
  option:  { value: string; label: string},
  handleRemoveLabel: () => void,
  handleAddLabel : (_value: string) => void,
  handleUpdateLabel: (_value: string, _newLabel: string) => void
}

export default function ListValues(props : ListValuesP) {
  const dispatch = useDispatch()  
  const {option, handleRemoveLabel, handleAddLabel, handleUpdateLabel} = props
  const [Label, setLabel ] =useState(option?.label)
  return (
    <div>
      <label>
        options list
      </label>
          <div className="flex justify-center items-center content-baseline">
            <InputChange func={setLabel} value={Label}/>
            <BookmarkSquareIcon width={25} height={25} color="blue" onClick={() => handleUpdateLabel(option.value,Label)}  />
            <PlusIcon  width={25} height={25} color="blue" onClick={() => handleAddLabel(Label)} />
            <TrashIcon width={25} height={25} color="blue" onClick={handleRemoveLabel}  />
          </div>
    </div>
  )
}