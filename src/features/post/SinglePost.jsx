import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { PiArrowFatDown, PiArrowFatUp } from "react-icons/pi";
import { MdOutlineInsertComment } from "react-icons/md";
import PostComments from "./PostComments";
import AddComment from "./AddComment";
import ProfilePhoto from "../../ui/ProfilePhoto";
import usePost from "./usePost";
import Spinner from "../../ui/Spinner";

function Post() {
  const { data: currentPost, status } = usePost();

  return (
    <div className="p-8">
      {status === "pending" ? (
        <Spinner />
      ) : (
        <>
          <div className="flex items-center gap-3">
            <ProfilePhoto src={currentPost?.community.photo} size="big" />
            <div>
              <Link to={`/r/${currentPost.community.title}`}>
                <h3 className="font-bold inline-block hover:underline">
                  r/{currentPost.community.title}
                </h3>{" "}
              </Link>
              &#x2022;{" "}
              <span className="text-text-secondary">{currentPost.date}</span>
              <p className="text-text-secondary">{currentPost.user}</p>
            </div>
          </div>
          <div className="text-2xl font-bold mt-2">{currentPost.title}</div>
          <div className="text-text-neutral my-6">{currentPost.text}</div>
          <div className="flex gap-4">
            <div className="flex items-center bg-background-light rounded-full font-bold">
              <Button rounded>
                <PiArrowFatUp className="text-xl hover:text-orange" />
              </Button>
              {currentPost.upvotes}
              <Button rounded>
                <PiArrowFatDown className="text-xl hover:text-blue" />
              </Button>
            </div>
            <Button light>
              <MdOutlineInsertComment className="text-xl mr-2" />
              {currentPost.comments?.length}
            </Button>
          </div>

          <AddComment className="my-8" />

          <PostComments post={currentPost} />
        </>
      )}
    </div>
  );
}

export default Post;
