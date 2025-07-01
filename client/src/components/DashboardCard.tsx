type Props = { title: string; value: number };

export default function DashboardCard({ title, value }: Props) {
  return (
    <div className="bg-white shadow rounded-xl p-4 text-center">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}