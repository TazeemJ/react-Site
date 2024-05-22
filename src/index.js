import React from "react";
import ReactDOM from "react-dom/client";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "animate.css";
import App from "./App";
import Home from "./Screen/Home/Home";
import Images from "./Screen/Images/Images";
import Login from "./Screen/Login/Login";
import Profile from "./Screen/Profile/Profile";
import Page404 from "./Screen/Page404/Page404";
import Protected from "./Protected";

import { Provider } from "react-redux";
import store from "./Redux/Store";
import Post from "./Screen/Post/Post";
import Products from "./Screen/Products/Products";
import Cart from "./Screen/Cart/Cart";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "/images", element: <Images /> },
//       { path: "/login", element: <Login /> },
//       { path: "/profile", element: <Profile /> },
//       { path: "/*", element: <Page404 /> },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path={""} element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="products" element={<Products />} />
            <Route element={<Protected />}>
              <Route path="Cart" element={<Cart />} />
              <Route path="post" element={<Post />} />
              <Route path="images" element={<Images />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
