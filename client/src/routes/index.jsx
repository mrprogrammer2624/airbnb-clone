import { DashboardLayout } from "@/layouts/";
import { HomePage } from "@/pages";
import { createBrowserRouter, Outlet } from "react-router-dom";

const airbnbCloneRouter = createBrowserRouter(
  /* All Paths */
  [
    {
      path: "/",
      children: [
        {
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: <HomePage />,
            },
          ],
        },
        {
          /* Authentication Routes For Super Admin */
          // element: <AuthLayout />,
          element: <Outlet />,
          children: [
            {
              path: "login",
              // element: <Login />,
            },
            {
              path: "signup",
              // element: <SignUp />,
            },
          ],
        },
      ],
    },
    {
      /* Default Route (404) */
      path: "*",
      element: "<NotFoundPage />",
    },
  ],
  {
    /* Base URL */
    // basename: "/airbnb-clone",
  }
);

export default airbnbCloneRouter;
