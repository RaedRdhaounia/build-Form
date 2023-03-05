import { addBlock } from "@/store/reducers/formReducer ";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/rootReducer";

export default function Index(){
  const dispatch = useDispatch()
  const router = useRouter()
  const form = useSelector((state: RootState) => state.form);
  function handleBlock(){
    dispatch(addBlock("contacts"))
  }
  function handleReset(){
    alert('store reset')
    router.push('/')
  }
  return (
    <>
    <p className="">

    </p>
    <button
      className="bg-green-500 hover:bg-green-600"
      onClick={handleReset}
    >
      Click me
    </button>
      <h1>Form Name: <p>  {form.formName} </p></h1>
      <h1>Form Id:   <p> {form.formId}    </p></h1>
      <>
        <h1>Form blockers: </h1>
      </>
      {
      form.blockOrder.length === 0 ? <> no element <button onClick={handleBlock}> click to add new block</button> </> :
      form.blockOrder.map((el, index)=> {
        return (<div key={index} >
          {el}
        </div>)
      })}
    </>
  );
};