
// -- store imports
import { useAppSelector } from "@/store/store ";
import {FormName} from "@/components/others/ ";

// -- types imports
import { Block } from "@/components/error ";
import { BoxReducer } from "@/constants/types/interfaces ";
import { FormEvent } from "react";

 /*
/  / ----- Component BlockList is the unit block element of the Form at the application
 */

function BlockList(props : {block :BoxReducer}) {
  const {block} = props

// ----- store selector reducer
  const blockInfo = useAppSelector(state => state.block)
  return ( blockInfo && <Block block={block}  /> )
}

 /*
/  / ----- Component index is main component of the page at the path /form-template to show the final product that the user edited
 */

export default function index() {
// ----- store selector reducer
  //const FormData = useAppSelector(state => state.form)
  const blocks = useAppSelector(state => state.block)
// ----- errors 
  function handleSumbit(event: FormEvent<HTMLFormElement>) {
    if ( event.isTrusted === true) {
      alert("suucess")
    }
  }
  return (
  <form onSubmit={(event) =>  handleSumbit(event)}>
    <FormName update={true} />
          <div>
            {blocks.map((block, index) => {
              return <BlockList  key={index} block={block} />
            })}
          </div>
          <div className="flex justify-center " >
            <button type="submit"  > check </button>
          </div>
  </form>

  )
}