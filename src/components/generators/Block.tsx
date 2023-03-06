import { BlockP } from '@/constants/types/types '
import ConvertType from '../others/ConvertType'
import Save from '../others/Save'
import { BlockDescription, Divider } from '../utilities'

export default function Block(props: BlockP) {
  const {description, fields, id, label} = props
  return (
    <div>
      <Divider/>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <BlockDescription title={label} discription={description}/>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form >
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