import React from 'react'
import '../../css/components/button.css'

function CustomSecundaryButton(props) {
  return (
    <button className='button button-secundary'>{props.text}</button>
  )
}

export default CustomSecundaryButton