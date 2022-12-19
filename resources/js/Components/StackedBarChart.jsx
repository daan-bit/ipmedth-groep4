import React, {useEffect, useState} from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, defaults} from 'chart.js';
import { Bar} from 'react-chartjs-2'; 
 
function StackedBarChart({rightArray, wrongArray, unFinishedArray, Assignments, refreshData, calculateStatistics}) {

    const [labels, setLabels] = useState([]);

    const [graphData] = useState({
        rightList: [],
        wrongList: [],
        unfinishedList: [],
      });
    
    useEffect(() => {
        setLabels([]);
        for(let i = 0; i < Assignments.length; i++){
            setLabels(old => [...old, Assignments[i]['name']]);
        } 
        refreshData();
        calculateStatistics();
        
        for(let i = 0; i < Assignments.length; i++){
            graphData.rightList.push(rightArray[i][0]);
            graphData.wrongList.push(wrongArray[i][0]);
            graphData.unfinishedList.push(unFinishedArray[i][0]);
        }

      }, []);
    
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
    
    const options = {
        plugins: {
            title: {
            display: true,
            text: 'Wereld 1 - antwoorden per vraag',
            },
        },
        responsive: true,
            scales: {
                x: {
                stacked: true,
                },
                y: {
                stacked: true,
                },
        },
        maintainAspectRatio: false
    };


    const data = {
        labels,
        datasets: [
            {
            label: 'Goed',
            data: graphData.rightList,
            backgroundColor: '#06D6A0',
            },
            {
            label: 'Fout',
            data: graphData.wrongList,
            backgroundColor: '#DB3069',
            },
            {
            label: 'Niet gemaakt',
            data: graphData.unfinishedList,
            backgroundColor: '#787879',
            },
        ],
    };

    defaults.font.family = 'Montserrat';
    defaults.font.size = '20rem';

    return (
        <section  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', padding: '1rem'}}>
            <Bar className="BarChartContainer__chart" options={options} data={data} style={{maxWidth: '100%', Height: '100%', fontFamily: 'Montserrat'}}/>
        </section>
        
    )
}

export default StackedBarChart;