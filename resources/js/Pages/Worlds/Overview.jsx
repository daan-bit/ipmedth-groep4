import Route from '@/Components/World/Route';
import React from 'react'
import '../../../css/pages/worldoverview.css';

function Overview(props) {
    console.log(props.world);
  return (
    <section className="world">
        <section className="world__navigation">
           <h2>Navigatie</h2> 
        </section>

        <section className="world__route">
        {props.world.map(({ id}) => (
            <Route className={`world__route__island assignment_${id}`} key={id}>
            /</Route>
        ))}
        </section>
    </section>
  )
}

export default Overview;