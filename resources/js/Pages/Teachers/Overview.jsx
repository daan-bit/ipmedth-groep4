import React from 'react'

function Overview(props) {
  
  return (
    <section>
        <h1>Docentenpagina</h1>
        <p>Username: {props.teacher.username}</p>
        <p>E-mail: {props.teacher.email}</p>
        <p>Id: {props.teacher.id}</p>
    </section>
  )
}

export default Overview