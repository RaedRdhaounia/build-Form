
import { BookmarkSquareIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import InputChange from "../utilities/block/InputChange"

type ListValuesP = {
  key: number
  option:  { value: string; label: string},
  handleRemoveLabel: () => void,
  handleAddLabel : (_value: string) => void,
  handleUpdateLabel: (_value: string, _newLabel: string) => void
}

export default function ListValues(props : ListValuesP) {
  const {option, handleRemoveLabel, handleAddLabel, handleUpdateLabel} = props
  const [Label, setLabel ] =useState(option?.label)
  return (
    <div>
      <label>
        options list
      </label>
      <InputChange func={setLabel} value={Label}/>
        <div className="flex  content-baseline">
          <BookmarkSquareIcon width={25} height={25} color="green" onClick={() => handleUpdateLabel(option.value,Label)}  />
          <PlusIcon  width={25} height={25} color="blue" onClick={() => handleAddLabel(Label)} />
          <TrashIcon width={25} height={25} color="red" onClick={handleRemoveLabel}  />
        </div>
    </div>
  )
}