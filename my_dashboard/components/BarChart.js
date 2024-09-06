import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function BarChart() {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/bar-chart-data/')
      .then(response => {
        if (response.data && response.data.labels && response.data.data) {
          const ctx = chartRef.current.getContext('2d');

          if (chartInstance) {
            chartInstance.destroy();
          }

          const newChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: response.data.labels,
              datasets: [{
                label: 'Bar Chart',
                data: response.data.data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              }],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  beginAtZero: true,
                },
              },
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
