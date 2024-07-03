import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from './Charts'

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend );

function LineGraph() {

    const options = {};

    const data = {};

    return (
        <div>
            <Line  options={options} data={data}/>
        </div>
    )
}

export default LineGraph 