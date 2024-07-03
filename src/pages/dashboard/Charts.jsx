import React from 'react';
import ChartComponent from './ChartComponent';

const lineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      data: [65, 59, 80, 81, 56, 55]
    }
  ]
};

const barData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55]
    }
  ]
};

const doughnutData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      data: [300, 50, 100]
    }
  ]
};

const radarData = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      data: [65, 59, 90, 81, 56, 55, 40]
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Example'
    }
  }
};

function Chart() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="flex items-center justify-center rounded bg-gray-50 h-96 dark:bg-gray-800 border-2">
        <ChartComponent data={lineData} options={options} type="line" />
      </div>
      <div className="flex items-center justify-center rounded bg-gray-50 h-96 dark:bg-gray-800 border-2">
        <ChartComponent data={barData} options={options} type="bar" />
      </div>
      <div className="flex items-center justify-center rounded bg-gray-50 h-96 dark:bg-gray-800 border-2">
        <ChartComponent data={doughnutData} options={options} type="doughnut" />
      </div>
      <div className="flex items-center justify-center rounded bg-gray-50 h-96 dark:bg-gray-800 border-2">
        <ChartComponent data={radarData} options={options} type="radar" />
      </div>
    </div>
  );
}

export default Chart;




