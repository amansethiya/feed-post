import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://feed-post-3tn7.onrender.com/feed").then((res) => {
      setPosts(res.data.post);
    });
  }, []);
  return (
    <>
      <section className="w-full  h-full flex flex-col gap-10  pt-10 ">
        <Link
          to="./create-post"
          className="text-center cursor-pointer w-[50%] self-center text-[#eff0f5] text-sm border-2 py-2 px-10 rounded-xl"
        >
          Create Post
        </Link>
        <h1 className="text-center text-xl  font-bold text-[#f80000] px-8 pt-15">
          Feeds That Created By You Guys{" "}
        </h1>

        <div className="grid sm:grid-cols-4 grid-cols-2 gap-2 px-5">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post._id}
                className="flex flex-col gap-2 p-1 bg-[#252525] rounded-xl"
              >
                <img src={post.image} alt="" className="rounded-xl" />
                <p className="text-[12px] font-semibold text-[#aaaaaa] px-2">
                  {post.caption}
                </p>
                <pre className="text-[10px] font-mono px-2">{post.tags}</pre>
              </div>
            ))
          ) : (
            <p className="pl-20 text-[#434242] font-mono">
              {" "}
              There is No Post To Show
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Feed;
