import React, {useState} from 'react'

function HookObject() {
    const [name,setName] = useState({firstName: '', lastName: ''});


  return (
    <div>
        <form>
        {/* Spread Operator */}
            <input type='text' value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})}></input>
            <input type='text' value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}></input>
        </form>
        {name.firstName}
        {name.lastName}
    </div>
  )
}

export default HookObject

/*
    Spread Operator in ES6 : we can use spread operator to merge multiple objects into one new object.
                             It allows us quicly copy(shallow copy) all or part of an existing array or object into another
                             array or object.
    let fruit = ['Apple','Banana']
    console.log(...fruit)
 */
