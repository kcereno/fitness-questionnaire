type ProgressBarProps = {
  percent: number;
};

function ProgressBar({ percent }: ProgressBarProps) {
  return (
    <div
      className="bg-blue-600 h-2.5"
      style={{ width: `${percent}%` }}
    ></div>
  );
}

export default ProgressBar;
