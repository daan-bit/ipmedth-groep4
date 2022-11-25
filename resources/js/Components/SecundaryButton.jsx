import React from 'react'
import '../../css/components/button.css'

function SecundaryButton(props) {
  return (
    <button className="button button-secundary" type="button">{props.text}</button>
  )
}

export default SecundaryButton