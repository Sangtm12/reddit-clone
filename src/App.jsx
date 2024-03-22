import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/r/:communityId/",
        element: <Community />,
      },
      {
        path: "/r/:communityId/create",
        element: <Create />,
      },
      {
        path: "/r/:communityId/:postId",
        element: <Post />,
      },
      {
        path: "/u/:userId",
        element: <User />,
        children: [
          { index: true, element: <UserOverview /> },
          { path: "posts", element: <UserPosts /> },
          { path: "comments", element: <UserComments /> },
          { path: "settings", element: <UserSettings /> },
        ],
        action: async ({ request }) => {
          const formData = await request.formData();
          console.log(formData);
          return null;
        },
      },
      {
        path: "/create",
        element: <Create />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {<RouterProvider router={router} />}
    </QueryClientProvider>
  );
}

export default App;
