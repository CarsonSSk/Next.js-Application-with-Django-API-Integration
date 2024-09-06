import { useEffect, useRef } from 'react';
import axios from 'axios';
import { createChart } from 'lightweight-charts';

export default function CandlestickChart() {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth || 600,
      height: 400,
      layout: {
        backgroundColor: '#ffffff',
        textColor: '#333',
      },
      grid: {
        vertLines: {
          color: '#eee',
        },
        horzLines: {
          color: '#eee',
        },
      },
      timeScale: {
        borderColor: '#D1D4DC',
        timeVisible: true,
        secondsVisible: false,
      },
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#4caf50',
      downColor: '#ef5350',
      borderDownColor: '#ef5350',
      borderUpColor: '#4caf50',
      wickDownColor: '#ef5350',
      wickUpColor: '#4caf50',
    });

    axios.get('http://127.0.0.1:8000/api/candlestick-data/')
      .then(response => {
        if (response.data && response.data.data) {
          candlestickSeries.setData(
            response.data.data.map(item => ({
              time: item.time,  // Assuming "x" is the time or date from the API
              open: item.open,
              high: item.high,
              low: item.low,
              close: item.close,
            }))
          );
        } else {
          console.error('Invalid data structure from API');
        }
      })
      .catch(err => {
        console.error('Error fetching candlestick data:', err);
      });

    // Add a resize event listener to handle responsiveness
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      chart.remove(); // Clean up on unmount
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={chartContainerRef} style={{ width: '100%', height: '400px' }} />;
}
