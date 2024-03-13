import { Link } from "react-router-dom";
import ProfilePhoto from "../../ui/ProfilePhoto";
import CommentInteraction from "./CommentInteraction";

import { useEffect, useRef, useState } from "react";

function SingleReply({
  reply,
  index,
  replyHeights,
  setReplyHeights,
  addReply,
}) {
  const [height, setHeight] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const height = ref.current.getBoundingClientRect().height;
    setReplyHeights((prev) => {
      return { ...prev, [index]: height };
    });

    // setHeight(calcHeight);
  }, [index, setReplyHeights]);

  useEffect(() => {
    let calcHeight = 35;
    for (let item in replyHeights) {
      if (item < index) {
        calcHeight += replyHeights[item];
      }
    }
    setHeight(calcHeight);
  }, [index, replyHeights]);

  return (
    <div className="pl-8 pt-4" ref={ref}>
      <div
        className={`border-l-[1px] border-b-[1px] border-border absolute top-0 w-4 left-4  rounded-bl-full`}
        style={{
          height: height + (addReply ? 125 : 0) + "px",
          top: addReply ? -14 : 0,
        }}
      ></div>
      <div className="flex items-center gap-2">
        <ProfilePhoto src={reply.user.photo} />
        <Link to className="hover:underline">
          <h3>{reply.user.name}</h3>
        </Link>
        &#x2022;
        <p className="text-text-secondary">{reply.date}</p>
      </div>
      <div className="pl-7">
        <p className="pt-2 pl-3 pb-1">{reply.text}</p>
        <CommentInteraction reply={reply} />
      </div>
    </div>
  );
}

export default SingleReply;
