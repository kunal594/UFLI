type Log = { applicantId: string; error: string; createdAt: string };

export default function ErrorLogTable({ logs }: { logs: Log[] }) {
  return (
    <table className="w-full text-sm text-left border mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-2 py-1">Applicant ID</th>
          <th className="px-2 py-1">Error</th>
          <th className="px-2 py-1">Time</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log, idx) => (
          <tr key={idx} className="border-t">
            <td className="px-2 py-1">{log.applicantId}</td>
            <td className="px-2 py-1">{log.error}</td>
            <td className="px-2 py-1">{new Date(log.createdAt).toLocaleTimeString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}