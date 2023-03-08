import { useState } from 'react'
// ---- util functions imports
import { classNames, fileds } from '../functions'
// types imports 
import { FieldType } from '@/constants/types/interfaces '

function SelectFiled(props:{handleActive:(_active:FieldType) => void }) {
  const {handleActive} = props
// ---- local states
  const [active, setActive] = useState("Text Filed")
// ---- action functions
//-- switch active filed
  function handleActiveTab(_activeFiled: string) {
    let current:FieldType = "text" ;
    setActive(_activeFiled);
    _activeFiled === "Text Filed" ? current = "text" : _activeFiled === "Radio Button" ? current = "radio" : _activeFiled === "Select Input" ? current = "select" : current = 'checkbox'
    handleActive(current)
  }

  return (
    <div className="p-4 flex flex-col" >
      {fileds.map((item) => (
        <div
          className={classNames( active === item.name
          ? 
            'group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 bg-purple-600'
          :
           "group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
          )}
          onClick={() => handleActiveTab(item.name)}
          key={item.name}
        >
          <a  className="block font-semibold text-gray-900">
            {item.name}
            <span className="absolute inset-0" />
          </a>
        </div>
      ))}
    </div>
  )
}

export default SelectFiled