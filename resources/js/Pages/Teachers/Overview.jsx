import React from 'react'

function Overview(props) {
  console.log(props);
  return (
    <section>
        <h1>Docentenpagina</h1>
        <p>Firstname: {props.employee.first_name}</p>
        <p>E-mail: {props.employee.email}</p>
        <p>Id: {props.employee.id}</p>
    </section>
  )
}

export default Overview