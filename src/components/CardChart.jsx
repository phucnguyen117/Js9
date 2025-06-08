import { Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function CardChart() {
  //biểu đồ tròn
  const pieData = {
    labels: ['Revenue', 'Other'],
    datasets: [
      {
        data: [915, 85], //
        backgroundColor: ['#3b82f6', '#f87171'],
        borderWidth: 0,
      },
    ],
  };

  //biểu đồ đường
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Growth %',
        data: [100, 105, 110, 115, 123],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="flex flex-row space-x-4 mb-4">
      <div className="bg-white p-4 rounded shadow flex flex-col items-center w-1/2 shadow-lg">
        <div className="w-48 h-48">
          <Pie data={pieData} options={options} />
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-2xl font-bold">$915</h3>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow flex flex-col items-center w-1/2 shadow-lg">
        <div className="w-48 h-48">
          <Line data={lineData} options={options} />
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-2xl font-bold">123%</h3>
        </div>
      </div>
    </div>
  );
}

export default CardChart;