// 404Page.js

import React from "react";

const NotFoundPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl text-gray-900 font-bold mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Oops! Looks like you're lost.
        </p>
        <a href="/" className="text-blue-500 hover:underline">
          Go back to home page
        </a>
      </div>
      <img
        src="https://cdn2.hubspot.net/hubfs/242200/shutterstock_774749455.jpg"
        alt="404 image"
        width={"250px"}
        height={"250px"}
        className="animated mt-8"
      />
    </div>
  );
};

export default NotFoundPage;
