import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import RegisterForm from "./pages/register";
import LoginForm from "./pages/login";
import Admin from "./pages/Admin";
import { useSelector } from "react-redux";

const App = () => {
  const authUser = useSelector((state) => state.auth.authUser);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <LoginForm />,
    },
    {
      path: "/register",
      element: <RegisterForm />,
    },
    {
      path: "/admin",
      element:
        authUser && authUser.isAdmin ? (
          <Admin />
        ) : (
          <Navigate to="/login" replace />
        ),
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
