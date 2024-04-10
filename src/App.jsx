import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
import { useEffect } from "react";
import getCommunity from "./API/getCommunity";

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
  useEffect(() => {
    getCommunity();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          className:
            "font-[16px] max-w-[500px] py-4 px-6 bg-background-light text-text-neutral font-semibold text-xl border-[1px]",
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
