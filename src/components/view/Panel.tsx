import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, PlusIcon } from '@heroicons/react/24/outline'
import { useAppSelector } from '@/store/store '
import BlockButton from '../utilities/panel/BlockButton'
import SelectedItem from '../utilities/panel/SelectedItem'
import Title from '../utilities/panel/Title'
import SelectFiled from '../utilities/panel/SelectFiled'
import { FieldType } from '@/constants/types/interfaces '

export default function Panel(props : {open: boolean, setOpen: Dispatch<SetStateAction<boolean>>}) {
  const {open, setOpen} = props
  const formStore = useAppSelector(store => store.form)
  const [active, setActive] = useState<FieldType>("text")
  const [selectedItem, setSelectedItem] = useState("")
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
                    {formStore.blocks.length < 1 &&  <BlockButton formLen={formStore.blocks.length} /> }
                    {formStore.blocks.length > 0 &&
                      <>
                        <Title/>
                        <SelectFiled handleActive={handleActive}/>
                        <div 
                          onDragLeave={() => setOpen(!open)} 
                          className="relative mt-6 flex-1 px-4 sm:px-6"
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