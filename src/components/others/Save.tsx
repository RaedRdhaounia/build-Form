// types imports 
import { useStateP } from "@/constants/types/types "

 /*
/  / ----- Component Save created to save a data block information at the Form 
 */

export default function Save(props: useStateP) {
  const {func} = props
  return (
    <div
      onClick={func}
      className="bg-gray-50 px-4 py-3 text-right sm:px-6"
    >
      <button
        className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Save
      </button>
    </div>
  )
}