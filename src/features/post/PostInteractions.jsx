import {
  PiArrowFatDown,
  PiArrowFatDownFill,
  PiArrowFatUp,
  PiArrowFatUpFill,
} from "react-icons/pi";
import Button from "../../ui/Button";
import useUpdateInteraction from "../user/useUpdateInteraction";
import { MdOutlineInsertComment } from "react-icons/md";
import useLoggedInUser from "../user/useLoggedInUser";

function PostInteractions({ currentPost }) {
  const { mutate: updateInteraction } = useUpdateInteraction();
  const { data: user } = useLoggedInUser();

  const vote =
    user?.interactions?.posts?.find((post) => post.id === currentPost.id)
      ?.interaction || null;

  return (
    <div className="flex gap-4">
      <div className="flex items-center bg-background-light rounded-full font-bold">
        <Button
          rounded
          onClick={(e) => {
            e.stopPropagation();
            updateInteraction({
              upvoteOrDownvote: "upvote",
              postOrComment: "post",
              id: currentPost.id,
            });
          }}
        >
          {vote !== "upvote" ? (
            <PiArrowFatUp className="text-xl hover:text-orange " />
          ) : (
            <PiArrowFatUpFill className="text-xl text-orange" />
          )}
        </Button>
        {currentPost.upvotes}
        <Button
          rounded
          onClick={(e) => {
            e.stopPropagation();
            updateInteraction({
              upvoteOrDownvote: "downvote",
              postOrComment: "post",
              id: currentPost.id,
            });
          }}
        >
          {vote !== "downvote" ? (
            <PiArrowFatDown className="text-xl hover:text-blue" />
          ) : (
            <PiArrowFatDownFill className="text-xl text-blue" />
          )}
        </Button>
      </div>
      <Button light>
        <MdOutlineInsertComment className="text-xl mr-2" />
        {currentPost.comments?.length}
      </Button>
    </div>
  );
}

export default PostInteractions;
