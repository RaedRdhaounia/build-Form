import { Dispatch, SetStateAction } from "react";

export default function AddMore(props : {open: boolean, setOpen: Dispatch<SetStateAction<boolean>>}) {
  const {open, setOpen} = props
  return ( !open ? 
    <div className="absolute right-0 top-20  px-4 py-3  sm:px-6">
      <button
        onClick={() => setOpen(true)}
        className="inline-flex justify-center rounded-md bg-purple-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        add more 
      </button>
    </div> : <div/>
  )
}