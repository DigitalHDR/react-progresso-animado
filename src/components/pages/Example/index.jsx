import React, { useState } from 'react';
import './Example.css'

export default function Example({done}, numero) {
  const [style, setStyle] = useState({})

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`
    }
    setStyle(newStyle)
  },200)

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {done}%
      </div>
    </div>
  )
}
