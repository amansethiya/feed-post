import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const create_post = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    axios
      .post("http://localhost:3000/create-post", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        (console.log(err), alert("making some mistake!!!"));
      });
  };
  return (
    <>
      <section className="w-full h-full flex flex-col gap-10  pt-10">
        <h1 className="text-center text-2xl font-bold text-[#f80000] ">
          Create Post to Add in a feed section Of our page
          <Link
            to="/"
            className="cursor-pointer text-[#eff0f5] text-[16px] border-2 py-1 px-3 rounded-xl ml-5"
          >
            Explore Feed
          </Link>
        </h1>

        <form
          action="/"
          onSubmit={handleSubmit}
          className="flex flex-col items-center  gap-4 pt-8 pb-20"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="">Insert Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="border-1 w-[800px] bg-[#1f1f1f]  rounded-xs px-2 py-0.5 "
            />
          </div>

          <textarea
            placeholder="Enter Caption"
            name="caption"
            maxLength={30}
            className="border-1 w-[800px] bg-[#1f1f1f] rounded-xs px-2 py-0.5"
          ></textarea>

          <input
            placeholder="Add Tags"
            type="text"
            name="tags"
            className="border-1 w-[800px] bg-[#1f1f1f]  rounded-xs px-2 py-0.5 "
          />
          <button
            type="submit"
            value="Submit"
            className="border-1 w-[800px] rounded-xs bg-[#ffffff] p-1 cursor-pointer text-[#b40000] font-bold"
          >
            Add to Feed
          </button>
        </form>
      </section>
    </>
  );
};

export default create_post;
