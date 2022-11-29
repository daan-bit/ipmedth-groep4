import React from 'react'

function Overview(props) {
    console.log(props.auth.user);

  return (
    <section>
        <p>Username: {props.auth.user.username}</p>
        <p>E-mail: {props.auth.user.email}</p>
        <p>Id: {props.auth.user.id}</p>
    </section>
  )
}

export default Overview