interface MatchBadgeProps {
  percent: number;
}

export default function MatchBadge({ percent }: MatchBadgeProps) {
  return (
    <span className="absolute top-3 right-3 rounded-full bg-primary-800 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
      {percent}% Match
    </span>
  );
}
