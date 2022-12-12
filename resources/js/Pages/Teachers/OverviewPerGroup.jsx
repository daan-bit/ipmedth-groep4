import React, {useEffect, useState} from 'react'

import '../../../css/pages/Teachers/OverviewPerGroup.css'
//Deze pagina later samenvoegen met overview pagina.

function OverviewPerGroup(props) {
    console.log(props);

    const [average, setAverage] = useState();
    const [median, setMedian] = useState();
    const [min, setMin] = useState();
    const [max, setMax] = useState();

    let allAssignmentIds = [];
    let amountStudents = props.students.length;
    let amountAssignments = props.assignments.length;

    //Haalt alle assignmentIds op per student en stopt in 1 array
    for (let i = 0; i < props.allResults.length; i++) {
        let resultPerStudent = props.allResults[i];

        for (let i = 0; i < resultPerStudent.length; i++){
            allAssignmentIds.push(resultPerStudent[i]['assignment_id']);
        }
    } 

    useEffect(() => {
        console.log('amountStudents: ', amountStudents);
        console.log('allAssignmentIds: ', allAssignmentIds);
        console.log('amountAssignements: ', amountAssignments);

        setAverage(Math.round(allAssignmentIds.reduce((a, b) => a + b, 0) / allAssignmentIds.length));
        setMedian(Math.round(calculateMedian(allAssignmentIds)));
        setMin(Math.min.apply(Math, allAssignmentIds));
        setMax(Math.max.apply(Math, allAssignmentIds));
      }, [props]);

    function calculateMedian(arr) {
        if (arr.length == 0) {
            return; 
        }
        arr.sort((a, b) => a - b); 
        const midpoint = Math.floor(arr.length / 2); 
        const median = arr.length % 2 === 1 ?
            arr[midpoint] : 
            (arr[midpoint - 1] + arr[midpoint]) / 2; 
        return median;
    }

  return (
    <article className='OverviewPerGroupPage'>
        <section className='OverviewPerGroupPage__statisticContainer'>
            <section className='statisticContainer__statistic'>{average}</section>
            <section className='statisticContainer__statistic'>{median}</section>
            <section className='statisticContainer__statistic'>{min} / {max}</section>
        </section>
        <section className='OverviewPerGroupPage__chart'></section>
    </article>
  )
}

export default OverviewPerGroup