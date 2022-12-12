import React, {useEffect, useState} from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, defaults} from 'chart.js';
import { Bar} from 'react-chartjs-2'; 
 
function StackedBarChart({opdr1, opdr2, opdr3, opdr4, opdr5}) {

    const [opdr1_goed, setOpdracht1_goed] = useState();
    const [opdr2_goed, setOpdracht2_goed] = useState();
    const [opdr3_goed, setOpdracht3_goed] = useState();
    const [opdr4_goed, setOpdracht4_goed] = useState();
    const [opdr5_goed, setOpdracht5_goed] = useState();

    const [opdr1_fout, setOpdracht1_fout] = useState();
    const [opdr2_fout, setOpdracht2_fout] = useState();
    const [opdr3_fout, setOpdracht3_fout] = useState();
    const [opdr4_fout, setOpdracht4_fout] = useState();
    const [opdr5_fout, setOpdracht5_fout] = useState();

    const [opdr1_bezig, setOpdracht1_bezig] = useState();
    const [opdr2_bezig, setOpdracht2_bezig] = useState();
    const [opdr3_bezig, setOpdracht3_bezig] = useState();
    const [opdr4_bezig, setOpdracht4_bezig] = useState();
    const [opdr5_bezig, setOpdracht5_bezig] = useState();

    useEffect(() => {
        setOpdracht1_goed(opdr1.filter(x => x==1).length);
        setOpdracht2_goed(opdr2.filter(x => x==1).length);
        setOpdracht3_goed(opdr3.filter(x => x==1).length);
        setOpdracht4_goed(opdr4.filter(x => x==1).length);
        setOpdracht5_goed(opdr5.filter(x => x==1).length);

        setOpdracht1_fout(opdr1.filter(x => x==-1).length);
        setOpdracht2_fout(opdr2.filter(x => x==-1).length);
        setOpdracht3_fout(opdr3.filter(x => x==-1).length);
        setOpdracht4_fout(opdr4.filter(x => x==-1).length);
        setOpdracht5_fout(opdr5.filter(x => x==-1).length);

        setOpdracht1_bezig(opdr1.filter(x => x==0).length);
        setOpdracht2_bezig(opdr2.filter(x => x==0).length);
        setOpdracht3_bezig(opdr3.filter(x => x==0).length);
        setOpdracht4_bezig(opdr4.filter(x => x==0).length);
        setOpdracht5_bezig(opdr5.filter(x => x==0).length);
      });

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

    const labels = ['Opdracht 1', 'Opdracht 2', 'Opdracht 3', 'Opdracht 4', 'Opdracht 5'];

    const data = {
        labels,
        datasets: [
            {
            label: 'Goed',
            data: [opdr1_goed, opdr2_goed, opdr3_goed, opdr4_goed, opdr5_goed],
            backgroundColor: '#06D6A0',
            },
            {
            label: 'Fout',
            data: [opdr1_fout, opdr2_fout, opdr3_fout, opdr4_fout, opdr5_fout],
            backgroundColor: '#DB3069',
            },
            {
            label: 'Niet gemaakt',
            data: [opdr1_bezig, opdr2_bezig, opdr3_bezig, opdr4_bezig, opdr5_bezig],
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