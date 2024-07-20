import React, {useState, useEffect} from 'react'

function FunctionCounterOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState(0);
    useEffect(() => {
      console.log("user effect")
      document.title = `clicked ${count} times`
    },[name,count])
  return (
    <div>
      <input type='text' value={name} onChange={e =>{setName(e.target.value)}}></input>
      <button onClick={()=>{setCount(count+1)}}>click {count}</button>
    </div>
  )
}

export default FunctionCounterOne
