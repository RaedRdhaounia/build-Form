import { addBlock } from "@/store/reducers/formReducer ";
import { persistor } from "@/store/store ";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/rootReducer";

export default function Index(){
  const dispatch = useDispatch()
  const form = useSelector((state: RootState) => state.form);
  function handleBlock(){
    dispatch(addBlock("contacts"))
  }
  function handleReset(){
    persistor.purge()
  }
  return (
    <>
      <button onClick={handleReset} > reset store </button>
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