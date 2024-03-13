import { PiArrowFatDown, PiArrowFatUp } from "react-icons/pi";
import Button from "../../ui/Button";
import { MdOutlineInsertComment } from "react-icons/md";

function CommentInteraction({ comment, reply, replyFn }) {
  return (
    <div className="flex gap-2">
      <div className="flex items-center rounded-full select-none text-xs font-semibold">
        <Button rounded>
          <PiArrowFatUp className="text-lg hover:text-orange" />
        </Button>
        {comment ? comment.upvotes : reply.upvotes}
        <Button rounded>
          <PiArrowFatDown className="text-lg hover:text-blue" />
        </Button>
      </div>

      {reply ? null : (
        <Button onClick={replyFn}>
          <MdOutlineInsertComment className="text-lg mr-2" />
          <span className="text-xs">Reply</span>
        </Button>
      )}
    </div>
  );
}

export default CommentInteraction;
