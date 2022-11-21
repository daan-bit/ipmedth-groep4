import React from 'react'
import '../../css/input.css'

function TextInput(props) {
  return (
    <input className="input" placeholder={props.placeholder}></input>
  )
}

export default TextInput
