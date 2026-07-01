import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  maxStars?: number;
  size?: "sm" | "md";
}

export function RatingStars({ rating, maxStars = 5, size = "sm" }: RatingStarsProps) {
  const iconSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`Rating: ${rating} out of ${maxStars} stars`}
    >
      {Array.from({ length: maxStars }, (_, i) => {
        const filled = i < Math.floor(rating);
        const partial = i === Math.floor(rating) && rating % 1 >= 0.5;

        return (
          <Star
            key={i}
            className={`${iconSize} ${
              filled || partial
                ? "fill-amber-400 text-amber-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        );
      })}
      <span className="ml-1 text-sm text-gray-500">({rating})</span>
    </div>
  );
}
