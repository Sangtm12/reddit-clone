function UserStat({ data, title }) {
  return (
    <div className="w-full my-4">
      <p className="font-bold">{data}</p>
      <p className="text-text-secondary">{title}</p>
    </div>
  );
}

function UserInfo({ user }) {
  return (
    <div className="bg-background-dark p-4 m-4 rounded-2xl h-min ">
      <h3 className="text-xl text-white font-bold pb-4 border-b-[1px] border-border">
        {user?.name}
      </h3>
      <div className="flex">
        <UserStat data={user.posts} title="Post(s)" />
        <UserStat data={user.comments} title="Comment(s)" />
      </div>
      <UserStat data={user.createdAt} title="Created at" />
    </div>
  );
}

export default UserInfo;
