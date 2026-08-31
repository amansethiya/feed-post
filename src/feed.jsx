import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/feed").then((res) => {
      setPosts(res.data.post);
    });
  }, []);
  return (
    <>
      <section className="feeds py-10">
        <h1 className="text-center text-2xl font-bold text-[#f80000] py-10">
          Feeds That Created By You Guys{" "}
          <Link
            to="./create-post"
            className="cursor-pointer text-[#eff0f5] text-[16px] border-2 py-1 px-3 rounded-xl ml-5"
          >
            Create Post
          </Link>
        </h1>

        <div className="grid grid-cols-4 gap-2 px-5">
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
