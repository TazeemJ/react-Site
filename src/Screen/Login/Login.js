import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logoutAuth, loginAuth } from "../../Redux/features/authSlice";
import { useNavigate, Navigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Auth = useSelector((res) => res.authSlice);
  const [LoaderForLogin, setLoaderForLogin] = useState(false);
  console.log(Auth.user);
  const [user, setUser] = useState({
    email: "kminchelle",
    password: "0lelplR",
  });
  function handleInput(e) {
    // setUser({ ...user, [e.target.name]: e.target.value });
    setUser((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  }

  const handelSubmit = async (e) => {
    setLoaderForLogin(true);
    e.preventDefault();
    try {
      const responsive = await axios({
        method: "post",
        url: "https://dummyjson.com/auth/login",
        data: {
          username: user.email,
          password: user.password,
        },
      });
      setLoaderForLogin(false);
      dispatch(loginAuth(responsive.data));
      navigate("/profile");
    } catch (error) {
      dispatch(logoutAuth());
    }
  };
  return Auth.user == null ? (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-2/5 relative flex flex-col p-4 rounded-md text-black bg-white formShadow p-8">
        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center max-w-md mx-auto">
          Welcome back to <span className="text-[#7747ff]">App</span>
        </div>
        <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
          Log in to your account
        </div>
        <form className="flex flex-col gap-3" onSubmit={handelSubmit}>
          <div className="block relative">
            <label
              htmlFor="email"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              required
              value={user.email}
              onChange={handleInput}
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
            />
          </div>
          <div className="block relative">
            <label
              htmlFor="password"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              name="password"
              required
              value={user.password}
              onChange={handleInput}
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>

          <div className="flex gap-4 items-center px-3 py-5">
            <div className="checkbox-wrapper">
              <input
                id="_checkbox-26"
                type="checkbox"
                disabled={(user.email.length && user.password.length) === 0}
              />
              <label htmlFor="_checkbox-26">
                <div className="tick_mark"></div>
              </label>
            </div>
            <label>Remember Me !</label>
          </div>

          <button
            type="submit"
            className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal mt-4"
          >
            {!LoaderForLogin ? "Login" : "loading..."}
          </button>
        </form>
        <div className="text-sm text-center mt-[1.6rem]">
          Don’t have an account yet?{" "}
          <a className="text-sm text-[#7747ff]" href="#">
            Sign up for free!
          </a>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to={"/profile"} />
  );
};

export default Login;
