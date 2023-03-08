// -- components imports
import {Block} from "@/components/generators ";
import {Save} from "@/components/others ";

// -- data imports
import {FormInfo } from "@/constants/defaultValues ";

 /*
/  / ----- Component index is main component of the page at the path /components to show the list of component and form style
 */

export default function index() {
  return (
    <>
      <div className="text-center m-16">
        {FormInfo.formName}
      </div>
      {FormInfo.blocks && FormInfo.blocks.map((block, index) => {
        return ( <Block {...block} key={index} />)
      })}
      <Save/>
    </>
  )
}
