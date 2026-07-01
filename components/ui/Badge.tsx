interface BadgeProps {
  count: number;
  className?: string;
}

export function Badge({ count, className = "" }: BadgeProps) {
  if (count <= 0) return null;

  return (
    <span
      className={`absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white ${className}`}
      aria-label={`${count} items in cart`}
    >
      {count > 99 ? "99+" : count}
    </span>
  );
}
