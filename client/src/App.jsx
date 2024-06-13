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
import CreatePlayList from "./components/CreatePlayList";
import SideHeader from "./components/SideHeader";
import MusicPlayer from "./components/MusicPlay";
import Layout from "./components/layout";
import Carousal from "./components/Carousal";
import SongSection from "./components/SongSection";

const App = () => {
  const authUser = useSelector((state) => state.auth.authUser);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <>
              <Carousal />
              <SongSection />
            </>
          ),
        },
        {
          path: "/playlist",
          element: <CreatePlayList />,
        },
      ],
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
      path: "/admin/*",
      element:
        authUser && authUser.isAdmin ? (
          <Admin />
        ) : (
          <Navigate to="/login" replace />
        ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
