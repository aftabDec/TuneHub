import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import RegisterForm from "./pages/register";
import LoginForm from "./pages/login";

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
]);
function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
