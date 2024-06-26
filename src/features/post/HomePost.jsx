import { Link, useNavigate } from "react-router-dom";
import ProfilePhoto from "../../ui/ProfilePhoto";
import PostInteractions from "./PostInteractions";
import calcDate from "../../utils/calcDate";

function HomePost({ post, view = "card" }) {
  let previewText;
  let wordArray = post.text.split(" ");
  if (wordArray.length > 70) {
    previewText = wordArray.slice(0, 70).join(" ") + "...";
  } else {
    previewText = post.text;
  }

  const navigate = useNavigate();

  return (
    <div className="border-b-[1px] border-border">
      <div
        onClick={() => {
          navigate(`/r/${post.community.title}/${post.id}`);
        }}
      >
        <div className="hover:bg-post-hover px-4 py-2 rounded-2xl">
          <div className="flex items-center gap-2 text-text-secondary text-xs">
            <ProfilePhoto src={post.community.photo} size="big" />
            <Link
              to={"/r/" + post.community.title}
              className="font-bold text-text-neutral hover:underline"
            >
              r/{post.community.title}
            </Link>
            &#x2022; {calcDate(post.date)}
          </div>
          <div className="text-lg font-bold py-2">{post.title}</div>
          {view === "card" && <p className="mb-4 font-light ">{previewText}</p>}
          <PostInteractions currentPost={post} />
        </div>
      </div>
    </div>
  );
}

export default HomePost;

/* */
