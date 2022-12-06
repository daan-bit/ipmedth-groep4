import Navbar from '@/Components/World/NavBar';
import Route from '@/Components/World/Route';
import { Head } from '@inertiajs/inertia-react';
import React from 'react'
import '../../../css/pages/worldoverview.css';

function Overview(props) {
  return (
    <section className="world">
      <Head title="🏖️ Wereld" />
      <Navbar></Navbar>

      <section className="world__route">
        {props.world.map(({ id }) => (
          <Route className={`world__route__island assignment_${id}`} key={id}>
            /</Route>
          
        ))}
      </section>
    </section>
  )
}

export default Overview;