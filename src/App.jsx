import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Community from "./pages/Community";
import User from "./pages/User";
import Post from "./pages/Post";
import AppLayout from "./ui/AppLayout";
import Create from "./pages/Create";
import UserOverview from "./features/user/UserOverview";
import UserPosts from "./features/user/UserPosts";
import UserComments from "./features/user/UserComments";
import UserSettings from "./features/user/UserSettings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/r/:communityId/" element={<Community />} />
          <Route path="/r/:communityId/create" element={<Create />} />
          <Route path="/r/:communityId/:postId" element={<Post />} />
          <Route path="/u/:userId" element={<User />}>
            <Route index element={<UserOverview />} />
            <Route path="posts" element={<UserPosts />} />
            <Route path="comments" element={<UserComments />} />
            <Route path="settings" element={<UserSettings />} />
          </Route>
          <Route path="/create" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
