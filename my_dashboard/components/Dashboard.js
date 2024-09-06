import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import CandlestickChart from './CandlestickChart';
import './Dashboard.css'; // Import the CSS file for styling

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="chart-row">
        <div className="chart-container">
          <LineChart />
        </div>
        <div className="chart-container">
          <BarChart />
        </div>
      </div>
      <div className="pie-chart-container">
        <PieChart />
      </div>
      <div className="pie-chart-container">
        <CandlestickChart />
      </div>
    </div>
  );
}
