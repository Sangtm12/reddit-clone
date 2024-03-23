import Feed from "../features/post/Feed";
import RecentPosts from "../features/post/RecentPosts";

function Home() {
  return (
    <div className="grid grid-cols-[auto_370px] w-full">
      <div className="h-full overflow-auto">
        <Feed />
      </div>
      <div className="h-full overflow-auto">
        <RecentPosts />
      </div>
    </div>
  );
}

export default Home;
