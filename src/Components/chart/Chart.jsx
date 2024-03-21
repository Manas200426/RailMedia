import React, { useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import "./Chart.css"
const Chart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current && chartRef.current.chartInstance) {
      chartRef.current.chartInstance.destroy(); // Destroy the previous chart instance
    }
    // eslint-disable-next-line
  }, []);

  const chartData = {
    labels: data.map(item => item.category),
    datasets: [
      {
        label: 'Category Distribution',
        data: data.map(item => item.count),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    width: 200,
    height: 200,
  };

  return (
    <div className="chart-container">
      <h2 className="chart-title">Category Distribution Chart</h2>
      <Pie ref={chartRef} data={chartData} options={chartOptions} />
    </div>
  );
};

export default Chart;

