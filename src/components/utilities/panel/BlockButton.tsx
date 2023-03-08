import { useState } from "react"
// -- action store functions import 
import { useDispatch } from "react-redux"
// -- reducers imports
import { blockAdd } from "@/store/reducers/blockReducer "
import { addBlock } from "@/store/reducers/formReducer "
// -- components imports 
import Divider from "../Divider"
import { newId } from "../functions"

 /*
/  / ----- Component BlockButton botton  created to add the first block at the panel
 */

export default function BlockButton() {
  const dispatch = useDispatch()

// -- local states
  const [blockInfo, setBlockInfo] = useState({description:"", label:"", fields:[]})

// -- action functions
  function handleAdd() {
    const createId = newId()
    dispatch(blockAdd({...blockInfo, id: createId}))
    dispatch(addBlock(createId))
  }

  return (
    <div className="px-4 py-3 text-center sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        onClick={handleAdd}
      >
        add Block
      </button>
      <Divider/>
      <div>
        <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
          label
        </label>
        <input
          value={blockInfo.label}
          onChange={(e)=>setBlockInfo(value => {return {...value, label:e.target.value }})}
          type="label-block"
          name={'fd'}
          placeholder={"please add your label "}
          id="label-block"
          className="m-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div>
        <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
          description
        </label>
        <input
          value={blockInfo.description}
          onChange={(e)=>setBlockInfo(value => {return {...value, description:e.target.value }})}
          type="text"
          name="description-block"
          placeholder={"please add your label "}
          id="description-block"
          className="m-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  )
}