import { useState } from 'react'
// ---- store imports
// -- action store functions import 
import { useDispatch    } from 'react-redux'
import { useAppSelector } from '@/store/store '
// -- reducers import
import { setFormName } from '@/store/reducers/formReducer '
// ---- components imports 
import Save from './Save'
// ---- icons imports 
import { PencilIcon } from '@heroicons/react/24/outline'

 /*
/  / ----- Component FormName created to execute, controle and update the form name of the form builder
 */

export default function FormName(props:{update?:boolean}) {
  const {update} = props
  const dispatch = useDispatch()
// ----- store selct - convert dispatch form Name -
  const FormNameInfo = useAppSelector(state => state.form.formName)

// ----- local - states -
  const [updateFormName, setUpdateFormName] = useState(FormNameInfo)
  const [edit          , setEdit          ] = useState(true)

// ------ action functions ------
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
      {!update && <PencilIcon width={24} height={24} color="gray" onClick={handleEdit} /> } 
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