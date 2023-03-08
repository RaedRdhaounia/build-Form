// types imports 
import { useStateP } from "@/constants/types/types "

 /*
/  / ----- Component AddFiled Button created to dispatch adding nex field to a block
 */

export default function AddFiled(props: useStateP) {
  const {func} = props
  return (
    <div
      onClick={func}
      className="bg-gray-50 px-4 py-3 text-center items-center sm:px-6"
      style={{width: "inherit", display:"contents"}} 
    >
      <button
        className="inline-flex justify-center rounded-md bg-purple-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Add
      </button>
    </div>
  )
}