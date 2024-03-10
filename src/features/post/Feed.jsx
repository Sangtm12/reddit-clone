import { useState } from "react";
import { posts } from "../../data/posts";
import Button from "../../ui/Button";
import {
  CardOutline,
  CardFill,
  ClassicOutline,
  ClassicFill,
} from "../../ui/RedditIcons";
import HomePost from "./HomePost";

function Feed() {
  const [view, setView] = useState("card");
  return (
    <div className="px-6">
      <div className="border-b-[1px] border-border h-12 flex justify-end items-center gap-2">
        <h3>View:</h3>
        <Button
          bg={`${view === "card" && "light"}`}
          className="gap-2"
          onClick={() => {
            setView("card");
          }}
        >
          {view === "card" ? <CardFill /> : <CardOutline />}
          Card
        </Button>
        <Button
          bg={`${view === "classic" && "light"}`}
          className="gap-2"
          onClick={() => {
            setView("classic");
          }}
        >
          {view === "classic" ? <ClassicFill /> : <ClassicOutline />}
          Classic
        </Button>
      </div>
      {posts.map((post) => {
        return <HomePost post={post} key={post.id} />;
      })}
    </div>
  );
}

export default Feed;
