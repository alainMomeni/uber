import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  registerables
} from 'chart.js';
import { Line, Bar, Doughnut, Radar } from 'react-chartjs-2';

ChartJS.register(
  ...registerables,
  LineElement,
  BarElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({ data, options, type }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current?.chartInstance;

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [data, options, type]);

  const renderChart = () => {
    switch (type) {
      case 'line':
        return <Line ref={chartRef} data={data} options={options} />;
      case 'bar':
        return <Bar ref={chartRef} data={data} options={options} />;
      case 'doughnut':
        return <Doughnut ref={chartRef} data={data} options={options} />;
      case 'radar':
        return <Radar ref={chartRef} data={data} options={options} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderChart()}
    </div>
  );
};

export default ChartComponent;
