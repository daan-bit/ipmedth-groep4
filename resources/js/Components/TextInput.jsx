import React from 'react'
import '../../css/components/input.css'

function TextInput(props) {
  return (
    <input className="input" placeholder={props.placeholder}></input>
  )
}

export default TextInput
