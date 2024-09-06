import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Chart, PieController, ArcElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(PieController, ArcElement, Title, Tooltip, Legend);

export default function PieChart() {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/pie-chart-data/')
      .then(response => {
        if (response.data && response.data.labels && response.data.data) {
          const ctx = chartRef.current.getContext('2d');

          if (chartInstance) {
            chartInstance.destroy();
          }

          const newChartInstance = new Chart(ctx, {
            type: 'pie',
            data: {
              labels: response.data.labels,
              datasets: [{
                label: 'Pie Chart',
                data: response.data.data,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
              }],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: true,
                  position: 'top',
                },
              },
            },
          });

          setChartInstance(newChartInstance);
        } else {
          console.error('Invalid data structure from API');
        }
      })
      .catch(err => {
        console.error('Error fetching data:', err);
      });

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div style={{ width: '600px', height: '400px' }}>
      <canvas ref={chartRef} />
    </div>
  );
}
