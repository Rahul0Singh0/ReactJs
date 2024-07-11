import React from 'react'
import './style.css'

function Stylesheet(props) {
    // dynamically styling using props
    let className = props.isvalue ? 'demo' : 'demo1';
  return (
    <div>
    {/* use multiple classes of css by using `` */}
      <h1 className={`${className} demo2`}>Hello Stylesheet</h1>
    </div>
  )
}

export default Stylesheet
