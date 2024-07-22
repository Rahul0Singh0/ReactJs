import React, { useEffect, useState } from 'react'

function FClassMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const logmouseposition = e => {
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('useful called')
        window.addEventListener('mousemove', logmouseposition)
    },[])
  return (
    <div>
       X : {x} Y : {y}
    </div>
  )
}

export default FClassMouse
