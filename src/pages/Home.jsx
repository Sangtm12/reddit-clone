import Feed from "../features/post/Feed";
import RecentPosts from "../ui/RecentPosts";

function Home() {
  return (
    <div className="grid grid-cols-[auto_370px] w-full">
      <Feed />
      <RecentPosts />
    </div>
  );
}

export default Home;
