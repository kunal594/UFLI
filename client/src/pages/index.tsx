import { useEffect, useState } from 'react';
import socket from '@/lib/socket';
import DashboardCard from '@/components/DashboardCard';
import Chart from '@/components/Chart';
import ControlPanel from '@/components/ControlPanel';

export default function Home() {
  const [metrics, setMetrics] = useState({ received: 0, processed: 0, errors: 0 });
  const [chartData, setChartData] = useState<number[]>([]);

  useEffect(() => {
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'metrics') {
        setMetrics(data.payload);
        setChartData(prev => [...prev.slice(-19), data.payload.processed]);
      }
    };
    return () => socket.close();
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">📊 Real-time Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <DashboardCard title="Received" value={metrics.received} />
        <DashboardCard title="Processed" value={metrics.processed} />
        <DashboardCard title="Errors" value={metrics.errors} />
      </div>
      <Chart data={chartData} />
      <ControlPanel onPause={() => {}} onRetry={() => {}} />
    </div>
  );
}