import React from 'react'
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';

function Overview(props) {
  console.log(props);
  return (
    <section>
      <article>
        <h1>id: {props.group.id}</h1>
        <p>school_group: { props.group.school_group }</p>
        <p>school_id: { props.group.school_id }</p>
        <p>school_year: {props.group.school_year}</p>
      </article>
      <br /><br /><br />
      <article>
        <h2>Students</h2>
        <ul>
          {props.students.map((student) => (
            <li key={student.id}>
              <h3>id: {student.id}</h3>
              <p>first_name: {student.first_name}</p>
              <p>user_id: {student.user_id}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  )
}

export default Overview