import React from 'react'

function Inline() {
    const heading = {
        color: 'red',
        fontSize: '126px' 
    }
  return (
    <div>
      <h1 className='error'>Error</h1>
      <h1 style={heading}>Hello Inline Stylesheet</h1>
    </div>
  )
}

export default Inline
