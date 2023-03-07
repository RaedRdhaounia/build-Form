import Block from "@/components/generators/Block ";
import AddMore from "@/components/others/AddMore ";
import FormName from "@/components/others/FormName ";
import Save from "@/components/others/Save ";
import InputChange from "@/components/utilities/block/InputChange ";
import { Panel } from "@/components/view ";
import { blockAdd, blockRemove, blockUpdate } from "@/store/reducers/blockReducer ";
import { addBlock, removeBlock } from "@/store/reducers/formReducer ";
import { useAppSelector } from "@/store/store ";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useDispatch } from "react-redux";

function BlockList(props : {index : number, block:string}) {
  const dispatch = useDispatch()
  const {index, block} = props
  const newId = `${(Math.random() *1000000 )}`
  const blockInfo = useAppSelector(state => state.block[index])
  const newBlockInfo = {description:"description", label:"title", id: blockInfo.id, fields:[]}
  const [updateBlockInfo, setUpdateBlockInfo] = useState(blockInfo)
  const [edit, setEdit] = useState(false)
  function handleEdit(){
    setEdit(!edit)
  }
  function handleRemoveBlock() {
    dispatch(removeBlock(block))
    dispatch(blockRemove(block))
    }
  function handleAddBlock() {
    dispatch(blockAdd({...newBlockInfo, id:newId}))
    dispatch(addBlock(newId))
  }
  function handleEditBotton() {
    dispatch(blockUpdate({...updateBlockInfo}))
    handleEdit()
  }
  function handleLabel(_value:string) {
    setUpdateBlockInfo({...updateBlockInfo, label: _value})
  }
  function handleDescription(_value:string) {
    setUpdateBlockInfo({...updateBlockInfo, description: _value})
  }
  return ( blockInfo &&
    <>
      <div className="flex max-sm:flex-col justify-between  max-sm:justify-center" >
      {edit ?
      <div
       className="ml-10"
      > 
        <div className="flex max-sm:flex-col items-center max-sm:items-start">
          <InputChange func={handleLabel} value={updateBlockInfo.label}/>
          <label> label</label>
        </div>
        <div className="flex max-sm:flex-col items-center max-sm:items-start">
          <InputChange func={handleDescription} value={updateBlockInfo.description}/>
          <label> description</label>
        </div>
      </div> : <div/>}
      <div className='flex  justify-end mr-10 mt-5 items-baseline'>
        {!edit ? 
          <PencilIcon width={24} height={24} color="gray" onClick={handleEdit} />
        : 
        <Save func={handleEditBotton} />
        }
        <PlusCircleIcon width={24} height={24} color="green" onClick={handleAddBlock}/>
        <TrashIcon width={24} height={24} color="red" onClick={handleRemoveBlock} />
      </div>
      </div>
      
      <Block {...blockInfo} />
    </>
  )
}
export default function index() {
  const FormData = useAppSelector(state => state.form)
  const [open, setOpen] = useState<boolean>(false)
  return (
  <>
    <Panel open={open} setOpen={setOpen} />
    <AddMore open={open} setOpen={setOpen} />
    <FormName/>
    <div>
      {FormData.blocks && FormData.blocks.map((block, index) => {
        return <BlockList index={index} key={index} block={block} />
      })}
    </div>
  </>

  )
}