
// import { useState } from "react";
import {handleAddCount,handleReduceCount} from "../Redux/action"
import {store} from "../Redux/store"
import {useDispatch,useSelector} from "react-redux"

function Counter() {

  // const [count,setCount]=useState(0)
  // const {count}=store.getState();
  // const {dispatch,subscribe}=store;

  const count=useSelector((reduxStore)=>reduxStore.count)
  const dispatch=useDispatch()
  // const [update,setUpdate]=useState(0)


  // function forceUpdate(){
  //   setUpdate((prev)=>prev+1)
  // }
  // subscribe(()=>{
    // console.log("Inside the subscribe method",store.getState())
    //tells react here to rerender the component because,
    // this function will only trigger if the state inside redux store has changed 

    // if the state of the component changed
    // if the props of the component changed

    // setUpdate((prev)=>prev+1)
    // forceUpdate();
  // })

  const handleAdd=()=>{
    dispatch(handleAddCount(1))
  }

  console.log(store.getState())
  return (
    <div className="App">
    <h1>Counter :  {count}</h1>
    <button onClick={handleAdd}>Add</button>
    <button onClick={()=>{
       dispatch(handleReduceCount(1))
    }
    }>Reduce</button>

    {/* <button onClick={()=>setCount((prev)=>prev+1)}>Add</button>
    <button onClick={()=>setCount((prev)=>prev-1)}>Reduce</button> */}

    

    </div>
  );
}

export default Counter;


// 1. install redux library ---- npm install redux
// create folder with 3 files
// action.js
// reducer.js
// store.js

// creating the store.js file contents
// creating the reducer.js file contents

// if you want to start measuring performance in your app, 
// pass a function