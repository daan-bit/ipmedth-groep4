import React from 'react'

function Overview(props) {
    
  return (
    <section>
        <h1>Adminpagina</h1>
        <p>Username: {props.employee.username}</p>
        <p>Id: {props.employee.id}</p>
    </section>
  )
}

export default Overview