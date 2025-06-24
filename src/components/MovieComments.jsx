import { comments } from "../data/comments";
import { Comment } from "./ui/Comment";

export function MovieComments() {
  return (
    <div className="mt-10">
      <h2 className="text-xl md:text-2xl lg:text-4xl mb-5">Комментарии</h2>
      <ul>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </ul>
    </div>
  );
}
