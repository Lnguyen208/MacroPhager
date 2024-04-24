
import './PiChart.scss';
import { PieChart } from '@mui/x-charts/PieChart';
import { useState, useEffect } from 'react';
import http from '../../http-common.js';
import CircularProgress from '@mui/material/CircularProgress';

const data = [
    { id: 0, value: 30, label: 'Fats (%)', color: '#7451f8'},
    { id: 1, value: 50, label: 'Carbs (%)', color: '#7DD8A8' },
    { id: 2, value: 20, label: 'Proteins (%)', color: '#6FA8DC' },
];

const PiChart = () => {
    const [macrodistrData, setmacrodistrData] = useState(null);

    useEffect(() => {
        http.post('/getMacroDistribution', {
            signal: AbortSignal.timeout(10000),
        }).then((response) => {
            console.log(response);
            setmacrodistrData(response.data);
        }).catch (function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        })
        setmacrodistrData(data);
    },[]);

    return (
        <div className='PiChart'>
            <div className='title'>Current Macros Distribution</div>
            {macrodistrData == null ?
                (<div className='spinner'><CircularProgress size='10rem' color='inherit' thickness={2}></CircularProgress></div>) :
                (<PieChart
                series={[
                    {
                        data,
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                    },
                ]}
                height={200}
                />)}
            <div className='title'>Breakdown Total:</div>
            <div className='breakdown'>
                <span className='breakdown fats'>Fats: {macrodistrData == null ? 0: macrodistrData[0].value} g</span>
                <span className='breakdown carbs'>Carbs: {macrodistrData == null ? 0 : macrodistrData[1].value} g</span>
                <span className='breakdown proteins'>Proteins: {macrodistrData == null ? 0 : macrodistrData[2].value} g</span>
            </div>
        </div>
    );
}

export default PiChart