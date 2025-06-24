export function Comment({ comment }) {
  return (
    <li
      key={comment.id}
      className="mb-4 bg-gray-600/50 dark:bg-gray-700/50 rounded-lg px-1 py-2"
    >
      <p className="text-md md:text-xl lg:text-2xl font-semibold text-amber-400/90 dark:text-amber-400/70">
        {comment.name}
      </p>
      <p className="text-sm md:text-md lg:text-xl">{comment.text}</p>
      <span className="text-[8px] md:text-sm lg:text-md text-gray-400/70 dark:text-gray-500/70">
        {new Date(comment.date).toLocaleDateString()}
      </span>
    </li>
  );
}
