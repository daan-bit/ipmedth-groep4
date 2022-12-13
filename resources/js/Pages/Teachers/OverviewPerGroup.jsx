import React, {useEffect, useState} from 'react'
import StackedBarChart from '@/Components/StackedBarChart';

import '../../../css/pages/Teachers/OverviewPerGroup.css'
//Deze pagina later samenvoegen met overview pagina.

function OverviewPerGroup(props) {
    const [average, setAverage] = useState();
    const [median, setMedian] = useState();
    const [mode, setMode] = useState();
    const [min, setMin] = useState();
    const [max, setMax] = useState();

    let allMadeAssignmentIds = [];

    const [rightArray, setRightArray] = useState([[0], [0], [0], [0], [0]]);
    const [wrongArray, setWrongArray] = useState([[0], [0], [0], [0], [0]]);
    const [unFinishedArray, setUnfinishedArray] = useState([[0], [0], [0], [0], [0]]);

    useEffect(() => {
        refreshData();
        calculateStatistics();

      }, [props]);
    
    function refreshData(){
        setRightArray([[0], [0], [0], [0], [0]]);
        setWrongArray([[0], [0], [0], [0], [0]]);
        setUnfinishedArray([[0], [0], [0], [0], [0]]);

        for (let i = 0; i < props.allResults.length; i++) {
            let resultPerStudent = props.allResults[i];
    
            for (let i = 0; i < resultPerStudent.length; i++){
                if(resultPerStudent[i]['status'] != 0){
                    allMadeAssignmentIds.push(resultPerStudent[i]['assignment_id']);
                }
                
                switch(resultPerStudent[i]['assignment_id']){
                    case 1:
                        //ResultsPerExcersise[0].push(resultPerStudent[i]['status']);
                        updateArrays(0, resultPerStudent[i]['status']);
                        break;
                    case 2:
                        //ResultsPerExcersise[1].push(resultPerStudent[i]['status']);
                        updateArrays(1, resultPerStudent[i]['status']);
                        break;
                    case 3:
                        //ResultsPerExcersise[2].push(resultPerStudent[i]['status']);
                        updateArrays(2, resultPerStudent[i]['status']);
                        break;
                    case 4:
                        //ResultsPerExcersise[3].push(resultPerStudent[i]['status']);
                        updateArrays(3, resultPerStudent[i]['status']);
                        break;
                    case 5:
                        //ResultsPerExcersise[4].push(resultPerStudent[i]['status']);
                        updateArrays(4, resultPerStudent[i]['status']);
                        break;
                } 
            }
            console.log("All made assigments: ", allMadeAssignmentIds)
        }
        // console.log("Wrong array: ", wrongArray); 
        // console.log("Right array: ", rightArray); 
        // console.log("Unfinished array: ", unFinishedArray); 
    }

    function updateArrays(placeInArray, statusOfExcercise){
        if(statusOfExcercise == 1){
            rightArray[placeInArray][0] += 1;
        }else if(statusOfExcercise == -1){
            wrongArray[placeInArray][0] += 1;
        }else if(statusOfExcercise == 0){
            unFinishedArray[placeInArray][0] += 1;
        }
    }

    function calculateStatistics(){
        setAverage(Math.round(allMadeAssignmentIds.reduce((a, b) => a + b, 0) / allMadeAssignmentIds.length));
        setMedian(Math.round(calculateMedian(allMadeAssignmentIds)));
        setMode(calculateMode(allMadeAssignmentIds))
        setMin(Math.min.apply(Math, allMadeAssignmentIds));
        setMax(Math.max.apply(Math, allMadeAssignmentIds));
    }

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

    function calculateMode(arr){
            const mode = {};
            let max = 0, count = 0;
          
            for(let i = 0; i < arr.length; i++) {
              const item = arr[i];
              
              if(mode[item]) {
                mode[item]++;
              } else {
                mode[item] = 1;
              }
              
              if(count < mode[item]) {
                max = item;
                count = mode[item];
              }
            }
            return max;
    }

  return (
    <article className='OverviewPerGroupPage'>
        <section className='OverviewPerGroupPage__statisticContainer'>
            <section className='statisticContainer__statistic'><p>{average}</p></section>
            <section className='statisticContainer__statistic'><p>{median}</p></section>
            <section className='statisticContainer__statistic'><p>{mode}</p></section>
            <section className='statisticContainer__statistic'><p>{min} / {max}</p></section>
        </section>
        <section className='OverviewPerGroupPage__chart'>
            <StackedBarChart rightArray={rightArray} wrongArray={wrongArray} unFinishedArray={unFinishedArray} Assignments={props.assignments}/>
        </section>
    </article>
  )
}

export default OverviewPerGroup