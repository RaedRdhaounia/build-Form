// types imports
import { blockDescriptionP } from "@/constants/types/types "

 /*
/  / ----- Component BlockDescription typography text created to share information for the block block
 */

export default function BlockDescription(props: blockDescriptionP) {
  const {discription, title} = props
  return (
    <div className="px-4 sm:px-0">
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        {title}
      </h3>
      <p className="mt-1 text-sm text-gray-600">
        {discription}
      </p>
    </div>
  )
}