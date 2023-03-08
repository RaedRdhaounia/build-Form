// types imports 
import { openStatusP } from "@/constants/types/types ";

 /*
/  / ----- Component AddMore Button created to for open panel menu
 */

export default function AddMore(props : openStatusP) {
  const {open, setOpen} = props
  return ( 
    !open && 
    <div className="relative top-200  px-4 py-3  sm:px-6">
      <button
        onClick={() => setOpen(true)}
        className="inline-flex justify-center rounded-md bg-purple-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        add more 
      </button>
    </div>
    || null
  )
}