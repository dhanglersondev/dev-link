import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Admin } from "./pages/Admin";
import { Networks } from "./pages/Networks";
import { NotFound } from "./pages/NotFound";

import { PrivateRoutes } from "./routes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/admin",
    element: <PrivateRoutes><Admin /></PrivateRoutes>
  },
  {
    path: "/admin/social",
    element: <PrivateRoutes><Networks /></PrivateRoutes>
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export { router };