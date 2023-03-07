import { BlockP } from '@/constants/types/types '
import { addBlockFiled } from '@/store/reducers/blockReducer '
import { useAppSelector } from '@/store/store '
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import ConvertType from '../others/ConvertType'
import Save from '../others/Save'
import { BlockDescription, Divider } from '../utilities'


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Block(props: BlockP) {
  const dispatch = useDispatch()
  const dragfiled =  useAppSelector(state => state.field.filed)
  const {description, fields, id, label} = props
  const [dropZone, setDropZone] = useState(false)

  function handleDrop(_event: React.DragEvent){
    const newId = `${(Math.random() *1000000 )}`
    if (dragfiled) {
      dispatch(addBlockFiled({index: id, field: {id: newId, type: dragfiled}}))
    }

    handleDropLeave()
  }
  function handleDragOver(_event: React.DragEvent) {
    _event.preventDefault()
  }
  function handleDropEnter() {
    setDropZone(true)
  }
  function handleDropLeave() {
    setDropZone(false)
  }
  return (
    <div 
      className={classNames(
      dropZone
        ? 'bg-purple-700 text-white border-2 border-black border-dotted '
        : 'text-gray-300  hover:text-white mt-10 sm:mt-0',
     
   )}
    >
      <Divider/>
      <div
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDragEnter={handleDropEnter}
        onDragLeave={handleDropLeave}
      >
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <BlockDescription title={label} discription={description}/>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form 
            >
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-1 gap-6">
                    {fields.map((field, index) => {
                      return (
                        <>
                       <ConvertType key={index} id={field.id} type={field.type} />
                        </>
                      )
                    })}
                  </div>
                </div>
                <Save/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}