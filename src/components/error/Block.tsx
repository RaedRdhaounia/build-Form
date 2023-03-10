// ---- components imports 
import { ConvertFormType } from '../others/ConvertType'
import { BlockDescription, Divider } from '../utilities'
// types imports 
import { BlockP } from '@/constants/types/types '

export default function Block(props: {block : BlockP}) {
  const {block} = props
  const {description, fields, label,} = block
// ------ action functions ------
  return (
    <div className='text-gray-300   mt-10 sm:mt-0' >
      <Divider/>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <BlockDescription title={label} discription={description}/>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 gap-6">
                  {fields.map((field, index) => {
                    return ( <ConvertFormType key={index} field={{id: field.id, type: field.type }} /> )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}