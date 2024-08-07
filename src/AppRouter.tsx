import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import UserList from "./users/UserList";
import PostList from "./posts/PostList";

const AppRouter = createBrowserRouter([
  {
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <Navigate to="/users" replace />,
          },
          {
            path: "users",
            element: <UserList />,
          },
          {
            path: "posts",
            element: <PostList />,
          },
        ],
      },
    ],
  },
]);

export default AppRouter;
