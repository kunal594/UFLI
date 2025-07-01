import { useEffect, useState } from 'react';
import ErrorLogTable from '@/components/ErrorLogTable';

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch('/api/logs')
      .then((res) => res.json())
      .then(setLogs);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">🚨 Error Logs</h1>
      <ErrorLogTable logs={logs} />
    </div>
  );
}
