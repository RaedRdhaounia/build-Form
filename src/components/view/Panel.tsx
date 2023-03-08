import { Fragment, useState } from 'react'
// -- store imports
import { useAppSelector } from '@/store/store '
// -- components imports 
import Title from '../utilities/panel/Title'
import {BlockButton, SelectedItem, SelectFiled} from '../utilities/panel/'
// -- icons imports
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

// -- types imports 
import { FieldType } from '@/constants/types/interfaces '
import { openStatusP } from '@/constants/types/types '

 /*
/  / ----- Component Dependency as a the unit elemnt of the advantages list for using the application
 */

export default function Panel(props : openStatusP ) {
  const {open, setOpen} = props

// ----- store selector reducer
  const formStore = useAppSelector(store => store.form)

// ----- local states
  const [active, setActive] = useState<FieldType>("text")

// ----- util action functions
  function handleActive(_active:FieldType){
    setActive(_active)
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-y-full"
                enterTo="translate-y-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-y-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full max-sm:max-w-xs flex-col bg-white py-6 shadow-xl">
                    {formStore.blocks.length < 1 &&  <BlockButton /> }
                    {formStore.blocks.length > 0 &&
                      <>
                        <Title/>
                        <SelectFiled handleActive={handleActive}/>
                        <div 
                          onDragLeave={() => setOpen(!open)} 
                          className="relative mt-6 flex-1 px-4 sm:px-2"
                        >
                          <SelectedItem setOpen={setOpen} type={active} id="0" /> 
                        </div>
                      </> 
                     }
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}