import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Main/Home";
import Root from "../Layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
