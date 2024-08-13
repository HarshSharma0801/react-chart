import React from 'react';
import { Doughnut, Bar, Line, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  // Register required components
  ChartJS.register(
    LineElement,
    PointElement,
    ArcElement,
    CategoryScale, // For the x-axis category scale
    LinearScale,   // For the y-axis linear scale
    BarElement,    // For the bar chart elements
    Title,
    Tooltip,
    Legend
  );
  
const Widget = ({ widget, onRemove }) => {
  const { type, data } = widget;

  const renderChart = () => {
    switch (type) {
      case 'doughnut':
        return <Doughnut  data={data} />;
      case 'bar':
        return <Bar data={data} />;
      case 'line':
        return <Line data={data} />;
      case 'pie':
        return <Pie data={data} />;
      default:
        return null;
    }
  };

  return (
    <div className="p-2 border rounded mb-2 flex justify-between items-center">
      <div className="flex-1">
        <h3 className="font-semibold">{widget.name}</h3>
        <div className='w-full flex justify-center'>
            <div className='w-[40%]'>
            {renderChart()}
            </div>
        </div>
      </div>
      <button onClick={onRemove} className="text-red-500 ml-4">✖</button>
    </div>
  );
};

export default Widget;
