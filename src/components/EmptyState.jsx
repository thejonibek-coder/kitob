import { SearchX, Heart, BookOpen } from "lucide-react";

const icons = {
  search: SearchX,
  favorites: Heart,
  default: BookOpen,
};

export default function EmptyState({
  type = "default",
  title,
  description,
  action,
}) {
  const Icon = icons[type] || icons.default;

  return (
    <div className="flex flex-col items-center justify-center px-4 py-20 text-center">

      {/* Icon */}

      <div
        className="
          mb-6 flex h-20 w-20 items-center justify-center
          rounded-2xl
          border border-gray-200
          bg-gray-100
          transition-all duration-300
          dark:border-gray-800
          dark:bg-gray-900
        "
      >
        <Icon
          className="
            h-10 w-10
            text-gray-400
            transition-colors
            dark:text-gray-500
          "
        />
      </div>

      {/* Title */}

      <h3
        className="
          mb-2 text-xl font-semibold
          text-gray-900
          dark:text-white
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          mb-6 max-w-md
          text-sm leading-6
          text-gray-500
          dark:text-gray-400
        "
      >
        {description}
      </p>

      {/* Action */}

      {action && (
        <div className="flex items-center justify-center">
          {action}
        </div>
      )}
    </div>
  );
}