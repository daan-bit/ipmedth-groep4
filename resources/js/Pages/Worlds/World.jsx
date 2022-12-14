import Navbar from '@/Components/World/NavBar';
import WorldRoute from '@/Components/World/WorldRoute';
import { Head } from '@inertiajs/inertia-react';
import React, { useState, useEffect } from 'react'
import '../../../css/pages/worldoverview.css';

function World(props) {
  const world = props.world;
  const assignments = props.assignments;
  const [currentLevel, setCurrentLevel] = useState(0);
  console.log(props);
  useEffect(() => {
      //definieer laatste assignment oftewel level_id die in results table naarvoren is gekomen.
    setCurrentLevel(assignments.length > 0 ? assignments[assignments.length - 1].assignment_id : 0);
}, [setCurrentLevel]);

  console.log(currentLevel)
  return (
    <section className="world">
      <Head title="🏖️ Wereld" />
      <Navbar student_id={props.student.id} />
      <section className="world__route">
        {world.map((item, key) => (
          <WorldRoute className={`world__route__island assignment_${item.id}`} currentIslandLevel={item.id == currentLevel + 1 ? (true) : (false)} assignmentStatus={assignments[item.id - 1] ? assignments[item.id - 1].status : '0'} assignmentId={item.id} key={key} />
        ))}
      </section>
    </section>
  )
}

export default World;
