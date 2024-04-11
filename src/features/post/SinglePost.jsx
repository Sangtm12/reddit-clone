import { Link } from "react-router-dom";
import PostComments from "./PostComments";
import AddComment from "./AddComment";
import ProfilePhoto from "../../ui/ProfilePhoto";
import usePost from "./usePost";
import Spinner from "../../ui/Spinner";
import PostInteractions from "./PostInteractions";

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
                <h3 className="font-bold inline-block hover:underline ">
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
          <PostInteractions currentPost={currentPost} />

          <AddComment className="my-8" />

          <PostComments post={currentPost} />
        </>
      )}
    </div>
  );
}

export default Post;
