import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

export default function Chart({ data }: { data: number[] }) {
  return (
    <Line
      data={{
        labels: data.map((_, i) => i.toString()),
        datasets: [{
          label: 'Processed',
          data,
          borderColor: '#3b82f6',
          tension: 0.4
        }]
      }}
      options={{ animation: false, responsive: true }}
    />
  );
}
