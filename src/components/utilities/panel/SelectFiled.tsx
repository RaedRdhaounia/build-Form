import { FieldType } from '@/constants/types/interfaces '
import React, { useState } from 'react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function SelectFiled(props:{handleActive:(_active:FieldType) => void }) {
  const {handleActive} = props
  const  fileds = [ { name: 'Text Filed' }, { name: 'Radio Button' }, { name: 'Select Input' }, { name: 'CheckBox'     } ]
  const [active, setActive] = useState("Text Filed")
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
            ? 'group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 bg-purple-600'
            : "group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
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