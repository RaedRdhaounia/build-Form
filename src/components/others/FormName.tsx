import { setFormName } from '@/store/reducers/formReducer '
import { useAppSelector } from '@/store/store '
import { PencilIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Save from './Save'

function FormName() {
  const dispatch = useDispatch()
  const FormNameInfo = useAppSelector(state => state.form.formName)
  const [updateFormName, setUpdateFormName] = useState(FormNameInfo)
  const [edit, setEdit] = useState(true)
  function handleEdit(){
    setEdit(!edit)
  }
  function handleFormName(){
    dispatch(setFormName(updateFormName));
    handleEdit()
  }
  return ( edit ?
    <div className="text-center m-16 flex justify-center">
      {FormNameInfo}
      <PencilIcon width={24} height={24} color="gray" onClick={handleEdit} />
    </div>
    :
    <div className="text-center m-16 flex justify-center">
    <input
      className="m-2 text-center block max-w-sm rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      onChange={(e) => setUpdateFormName(e.target.value)}
    />
    <Save func={handleFormName} />
    </div>
    
  )
}

export default FormName