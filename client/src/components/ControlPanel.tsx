type Props = {
  onPause: () => void;
  onRetry: () => void;
};

export default function ControlPanel({ onPause, onRetry }: Props) {
  return (
    <div className="flex gap-4 mt-4">
      <button onClick={onPause} className="bg-yellow-400 px-3 py-1 rounded text-white">
        Pause
      </button>
      <button onClick={onRetry} className="bg-green-500 px-3 py-1 rounded text-white">
        Retry
      </button>
    </div>
  );
}
