import LineChart from '../../components/LineChart';
import BarChart from '../../components/BarChart';
import PieChart from '../../components/PieChart';
import CandlestickChart from '../../components/CandlestickChart';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <LineChart />
      <BarChart />
      <PieChart />
      <CandlestickChart />
    </div>
  );
}
