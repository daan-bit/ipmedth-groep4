import React from 'react'
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';

function Overview(props) {
    
  return (
    <section>
        <h1>Adminpagina</h1>
        <p>Username: {props.employee.username}</p>
        <p>Id: {props.employee.id}</p>

        <ResponsiveNavLink method="post" href={route('logout')} as="button">
            Log Out
        </ResponsiveNavLink>
    </section>
  )
}

export default Overview