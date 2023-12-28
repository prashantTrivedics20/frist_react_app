import React,{Component,useState} from 'react'
function Counter() {
    // pass intitial value -> val, setter function
    // want to reflect on the ui
    let [count,setCount]=useState(0);
    const incrementCounter=()=>
    {
        console.log("increment run");
        setCount(count+1);
    }
    const decrementCounter=()=>
    {
        console.log("decrement run");
        setCount(count-1);
    }
    console.log("I ran");
  return (
    <>
    <button onClick={incrementCounter}>+</button>
    <p>{count}</p>
    <button onClick={decrementCounter}>-</button>
    </>
    
  )
}

export default Counter