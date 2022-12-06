import Navbar from '@/Components/World/NavBar';
import Route from '@/Components/World/Route';
import { Head } from '@inertiajs/inertia-react';
import React from 'react'
import '../../../css/pages/worldoverview.css';

function World(props) {
  return (
    <section className="world">
      <Head title="🏖️ Wereld" />
      <Navbar student_id={props.student.id} />
      <section className="world__route">
        {props.world.map(({ id }) => (
          <Route className={`world__route__island assignment_${id}`} assignmentId={id} key={id} linkClassName="world__route__island__link" />
        ))}
      </section>
    </section>
  )
}

export default World;