import { Link } from "react-router-dom";
import { PiArrowFatDown, PiArrowFatUp } from "react-icons/pi";
import { MdOutlineInsertComment } from "react-icons/md";

import Button from "../../ui/Button";

function HomePost({ post }) {
  return (
    <div className="border-b-[1px] border-border">
      <div className="hover:bg-post-hover p-4 rounded-2xl">
        <div className="flex items-center gap-2 text-text-secondary text-xs">
          <img src={post.community.photo} className="h-6 w-6 rounded-xl" />
          <Link
            to={post.community.link}
            className="font-bold text-text-neutral"
          >
            r/{post.community.title}
          </Link>
          &#x2022; {post.date}
        </div>
        <div className="text-lg font-bold py-4">{post.title}</div>
        <div className="flex gap-4">
          <Button bg="light" className="flex gap-2">
            <PiArrowFatUp className="text-xl" />
            {post.upvotes}
            <PiArrowFatDown className="text-xl" />
          </Button>
          <Button bg="light">
            <MdOutlineInsertComment className="text-xl mr-2" />
            {post.comments?.length}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomePost;
