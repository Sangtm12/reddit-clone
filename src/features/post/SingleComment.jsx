import ProfilePhoto from "../../ui/ProfilePhoto";
import { Link } from "react-router-dom";

import { FaMinus, FaPlus } from "react-icons/fa6";

import SingleReply from "./SingleReply";
import CommentInteraction from "./CommentInteraction";
import { useState } from "react";

import AddReply from "./AddReply";

function SingleComment({ comment }) {
  const [showReplies, setShowReplies] = useState(true);
  const [addReply, setAddReply] = useState(false);
  const [replyHeights, setReplyHeights] = useState({});

  return (
    <>
      <div className="flex mt-4">
        <div className="flex flex-col justify-between items-center relative">
          <ProfilePhoto src={comment.user.photo} />
          <div className="w-[1px] h-5/6 absolute bg-background-hover z-[-1]"></div>
          <div
            className="w-5 h-5 mb-2 border-[1px] text-xs border-white rounded-full flex justify-center items-center bg-background hover:bg-background-hover"
            onClick={() => {
              setShowReplies((s) => !s);
            }}
          >
            {showReplies ? <FaPlus /> : <FaMinus />}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 h-8 pl-2">
            <Link to className="select-none hover:underline">
              <h3>{comment.user.name}</h3>
            </Link>
            &#x2022;
            <p className="text-text-secondary">{comment.date}</p>
          </div>
          <div className="p-3">{comment.text}</div>
          <CommentInteraction
            comment={comment}
            replyFn={() => {
              setAddReply((r) => !r);
            }}
          />
        </div>
      </div>
      <div className="relative -mt-2 ">
        {addReply ? (
          <AddReply
            cancelFn={() => {
              setAddReply(false);
            }}
          />
        ) : null}

        {showReplies &&
          comment.replies.map((reply, index) => (
            <SingleReply
              reply={reply}
              key={reply.id}
              index={index}
              replyHeights={replyHeights}
              setReplyHeights={setReplyHeights}
              addReply={addReply}
            />
          ))}
      </div>
    </>
  );
}

export default SingleComment;
