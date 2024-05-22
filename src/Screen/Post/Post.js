import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../Redux/features/PostSlice";

const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postSlice);
  const [openPostId, setOpenPostId] = useState(null);

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  const togglePost = (postId) => {
    setOpenPostId(postId === openPostId ? null : postId);
  };

  console.log(posts);

  return (
    <div className="bg-yellow-100 p-8 ">
      <div className="w-3/4 mx-auto">
        {posts.data &&
          posts.data.map((post, index) => (
            <div
              key={post.id}
              style={{
                marginBottom: "10px",
                borderRadius: 10,
                overflow: "hidden",
              }}
              className="animate__animated animate__bounceIn"
            >
              <div
                style={{
                  borderBottom: "1px solid #ccc",
                  cursor: "pointer",

                  backgroundColor:
                    openPostId === post.id ? "rgb(49 135 61)" : "white",
                  color: openPostId === post.id ? "white" : "black",
                }}
                onClick={() => togglePost(post.id)}
              >
                <h3 style={{ margin: "0", padding: "10px" }}>
                  {index + ") "}
                  {post.title}
                </h3>
              </div>
              <div
                style={{
                  maxHeight: openPostId === post.id ? "1000px" : "0",
                  overflow: "hidden",
                  background: "white",
                  transition: "max-height 0.6s ease-in",
                }}
              >
                <div style={{ padding: "10px" }}>
                  <p>{post.body}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      {posts.loader && (
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
          </div>
        </div>
      )}
      {posts.error && <h1>posts.error</h1>}
    </div>
  );
};

export default Post;
