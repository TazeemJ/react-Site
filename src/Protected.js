import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const Protected = () => {
  const Auth = useSelector((auth) => auth.authSlice);
  console.log(Auth.user);
  return (
    <div>
      <>{Auth.user == null ? <Navigate to={"/login"} /> : <Outlet />}</>
    </div>
  );
};

export default Protected;
