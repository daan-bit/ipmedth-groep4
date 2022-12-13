import React, {useEffect, useState} from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, defaults} from 'chart.js';
import { Bar} from 'react-chartjs-2'; 
 
function StackedBarChart({rightArray, wrongArray, unFinishedArray, Assignments}) {

    const [labels, setLabels] = useState([]);

    //=======================================
    //=======================================
    //=======================================
    //=======================================
    //Alleen nog data in chart krijgen!!!!!!
    //=======================================
    //=======================================
    //=======================================
    //=======================================
       
    useEffect(() => {
        setLabels([]);
        for(let i = 0; i < Assignments.length; i++){
            setLabels(old => [...old, Assignments[i]['name']]);
        } 
        
        console.log("Wrong array: ", wrongArray); 
        console.log("Right array: ", rightArray); 
        console.log("Unfinished array: ", unFinishedArray); 
      
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
            data: [],
            backgroundColor: '#06D6A0',
            },
            {
            label: 'Fout',
            data: [wrongArray.values()],
            backgroundColor: '#DB3069',
            },
            {
            label: 'Niet gemaakt',
            data: [unFinishedArray.values()],
            backgroundColor: '#787879',
            },
        ],
    };

    defaults.font.family = 'Montserrat';
    defaults.font.size = '15px';

    return (
        <section  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '75vh', padding: '2rem'}}>
            <Bar className="BarChartContainer__chart" options={options} data={data} style={{width: '100%', height: '100%', border: '1px solid red', fontFamily: 'Montserrat'}}/>
        </section>
        
    )
}

export default StackedBarChart;