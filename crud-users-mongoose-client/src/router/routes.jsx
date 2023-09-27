import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import AddUserPage from "../pages/AddUserPage";
import UpdateUserPage from "../pages/UpdateUserPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout></AppLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "add-user",
        element: <AddUserPage></AddUserPage>,
      },
      {
        path: "update-user/:id",
        element: <UpdateUserPage></UpdateUserPage>,
      },
    ],
  },
]);
