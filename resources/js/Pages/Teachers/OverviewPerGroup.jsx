import React, {useEffect, useState} from 'react'
import StackedBarChart from '@/Components/StackedBarChart';

import '../../../css/pages/Teachers/OverviewPerGroup.css'
//Deze pagina later samenvoegen met overview pagina.

function OverviewPerGroup(props) {
    const [average, setAverage] = useState();
    const [median, setMedian] = useState();
    const [min, setMin] = useState();
    const [max, setMax] = useState();

    const [opdracht1, setOpdracht1] = useState([]);
    const [opdracht2, setOpdracht2] = useState([]);
    const [opdracht3, setOpdracht3] = useState([]);
    const [opdracht4, setOpdracht4] = useState([]);
    const [opdracht5, setOpdracht5] = useState([]);

    let allAssignmentIds = [];
    let amountStudents = props.students.length;
    let amountAssignments = props.assignments.length;

    useEffect(() => {
        setOpdracht1([]);
        setOpdracht2([]);
        setOpdracht3([]);
        setOpdracht4([]);
        setOpdracht5([]);

        for (let i = 0; i < props.allResults.length; i++) {
            let resultPerStudent = props.allResults[i];
    
            for (let i = 0; i < resultPerStudent.length; i++){
                allAssignmentIds.push(resultPerStudent[i]['assignment_id']);
                
                if(resultPerStudent[i]['assignment_id'] == 1){
                    setOpdracht1(oud => [...oud, resultPerStudent[i]['status']]);
                }else if(resultPerStudent[i]['assignment_id'] == 2){
                    setOpdracht2(oud => [...oud, resultPerStudent[i]['status']]);
                }else if(resultPerStudent[i]['assignment_id'] == 3){
                    setOpdracht3(oud => [...oud, resultPerStudent[i]['status']]);
                }else if(resultPerStudent[i]['assignment_id'] == 4){
                    setOpdracht4(oud => [...oud, resultPerStudent[i]['status']]);
                }else if(resultPerStudent[i]['assignment_id'] == 5){
                    setOpdracht5(oud => [...oud, resultPerStudent[i]['status']]);
                }
  
            }
        } 
        // console.log('amountStudents: ', amountStudents);
        // console.log('allAssignmentIds: ', allAssignmentIds);
        // console.log('amountAssignements: ', amountAssignments);

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
            <section className='statisticContainer__statistic'><p>{average}</p></section>
            <section className='statisticContainer__statistic'><p>{median}</p></section>
            <section className='statisticContainer__statistic'><p>{min} / {max}</p></section>
        </section>
        <section className='OverviewPerGroupPage__chart'>
            <StackedBarChart opdr1={opdracht1} opdr2={opdracht2} opdr3={opdracht3} opdr4={opdracht4} opdr5={opdracht5}/>
        </section>
    </article>
  )
}

export default OverviewPerGroup