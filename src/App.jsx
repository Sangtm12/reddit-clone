import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import Post from "./pages/Post";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/r/:communityId" element={<Community />} />
          <Route path="/profile/:profileId" element={<Profile />} />
          <Route path="/r/:communityId/:postId" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
