import { useRouter } from "next/router";
import { useState } from "react";

// -- store imports
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/store ";

// -- reducers imports
import { blockAdd, blockRemove, blockUpdate } from "@/store/reducers/blockReducer ";
import { removeCheckBoxByBlock              } from "@/store/reducers/checkBoxReducer ";
import { addBlock, removeBlock              } from "@/store/reducers/formReducer ";

// -- components imports
import InputChange from "@/components/utilities/block/InputChange ";
import {AddMore, FormName, Save} from "@/components/others/ ";
import {Block} from "@/components/generators ";
import { Panel } from "@/components/view ";

// -- icons imports
import { PlusCircleIcon        } from "@heroicons/react/20/solid";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

// -- until functions imports
import { newId } from "@/components/utilities/functions ";

// -- types imports
import { BlockListP } from "@/constants/types/types ";

 /*
/  / ----- Component BlockList is the unit block element of the Form at the application
 */

function BlockList(props : BlockListP) {
  const dispatch = useDispatch()
  const {index, block} = props

// ----- store selector reducer
  const blockInfo = useAppSelector(state => state.block[index])
  const newBlockInfo = {description:"description", label:"title", id: blockInfo.id, fields:[]}

// ----- local states
  const [updateBlockInfo, setUpdateBlockInfo] = useState(blockInfo)
  const [edit           , setEdit           ] = useState(false)

// ----- util action functions
  function handleEdit(){
    setEdit(!edit)
  }
  function handleRemoveBlock() {
    dispatch(removeBlock(block))
    dispatch(blockRemove(block))
    dispatch(removeCheckBoxByBlock(blockInfo))
    }
  function handleAddBlock() {
    const createId = newId()
    dispatch(blockAdd({...newBlockInfo, id:createId}))
    dispatch(addBlock(createId))
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

 /*
/  / ----- Component index is interface page for the user at the path /create-template of the web application
 */

export default function index() {
  const router = useRouter();

// ----- store selector reducer
  const FormData = useAppSelector(state => state.form)

// ----- local states
  const [open, setOpen] = useState<boolean>(false)

// ----- util navigation function
  function handleCofirm() {
    router.push('/form-template')
  }
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
    <div className="flex justify-center " >
      <Save func={()=> handleCofirm()} />
    </div>
    
  </>

  )
}