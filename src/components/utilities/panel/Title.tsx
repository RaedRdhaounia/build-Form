import { Size, useWindowSize } from "../SizeWindow"

export default function Title() {
  const size : Size = useWindowSize()
  return (
    <div className="text-purple-700 m-4 text-center" >
      {size && size.width && size.width > 1200 ? "Select your item and Drop it at the valid block you like to add": "choose your input and press add to put it at the the main block" }
      
    </div>
  )
}