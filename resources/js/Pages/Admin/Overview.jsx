import React from 'react'

function Overview(props) {
    
  return (
    <section>
        <h1>Adminpagina</h1>
        <p>Username: {props.admin.username}</p>
        <p>Id: {props.admin.id}</p>
    </section>
  )
}

export default Overview