import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Admin } from "./pages/Admin";
import { Networks } from "./pages/Networks";  
import { NotFound } from "./pages/NotFound";

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
    element: <Admin />
  },
  {
    path: "/networks",
    element: <Networks />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export { router };