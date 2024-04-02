import Feed from "../features/post/Feed";
import RecentPosts from "../features/post/RecentPosts";

function Home() {
  return (
    <div className="grid grid-cols-[auto_370px] w-full h-full overflow-auto">
      <div className="">
        <Feed />
      </div>
      <div className="h-full">
        <RecentPosts />
      </div>
    </div>
  );
}

export default Home;
