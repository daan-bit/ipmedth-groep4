import React from 'react'
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';

function Overview(props) {
  console.log(props);
  return (
    <section>
        <h1>Docentenpagina</h1>
        <p>Firstname: {props.employee.first_name}</p>
        <p>E-mail: {props.employee.email}</p>
        <p>Id: {props.employee.id}</p>

        <ResponsiveNavLink method="post" href={route('logout')} as="button" className={"button-secundary"}>
            Log Out
        </ResponsiveNavLink>
    </section>
  )
}

export default Overview