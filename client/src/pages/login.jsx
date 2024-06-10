import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { setAuthUser } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import { useAuth } from "../Context/AuthContext";

const LoginForm = () => {
  const { login } = useAuth();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      navigate("/");
      console.log(res);
      const { token, isAdmin } = res.data;
      login(token, isAdmin);
      dispatch(setAuthUser({ token, isAdmin }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="flex w-11/12 max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="hidden md:block md:w-1/2 bg-gradient-to-r from-gray-900 to-gray-700 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl font-bold text-white">
              Welcome to the login page
            </h1>
          </div>
        </div>
        <div className="w-full p-8 md:w-1/2 bg-gray-900">
          <h2 className="text-2xl font-semibold text-white text-center">
            Music App
          </h2>
          <p className="text-xl text-gray-400 text-center">
            Login to your account
          </p>
          <form onSubmit={onSubmitHandler} className="mt-4">
            <div className="mt-4">
              <label className="block text-gray-400">Username</label>
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={onChangeHandler}
                className="w-full px-4 py-2 mt-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-purple-600"
                placeholder="Username"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-400">Password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={onChangeHandler}
                className="w-full px-4 py-2 mt-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-purple-600"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <a href="#" className="text-sm text-gray-400 hover:text-gray-200">
                Forgot password?
              </a>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-md hover:bg-gradient-to-l focus:outline-none focus:bg-purple-600"
              >
                Login
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-gray-400">
            New to Music App?{" "}
            <Link to="/register" className="text-purple-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
