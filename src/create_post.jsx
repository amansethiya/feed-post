import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const create_post = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    axios
      .post("https://feed-post-3tn7.onrender.com/create-post", formData)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        (console.log(err), alert("making some mistake!!!"));
        setLoading(false);
      });
  };
  return (
    <>
      <section className="w-full  h-full flex flex-col gap-10  pt-10 ">
        <Link
          to="/"
          className=" text-center cursor-pointer w-[50%] self-center text-[#eff0f5] text-sm border-2 py-2 px-10 rounded-xl"
        >
          Explore Feed
        </Link>

        <h1 className="text-center text-xl  font-bold text-[#f80000] px-8 pt-15">
          Create Post to Add in a feed section Of our page <br></br>
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center  gap-4  px-4 "
        >
          <div className="flex flex-col gap-1.5 w-full max-w-[800px]">
            <label htmlFor="">Insert Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              required
              className="border-1  bg-[#1f1f1f]  rounded-xs px-2 py-0.5 "
            />
          </div>

          <textarea
            placeholder="Enter Caption"
            name="caption"
            maxLength={30}
            required
            className="border-1 w-full max-w-[800px]  bg-[#1f1f1f] rounded-xs px-2 py-0.5"
          ></textarea>

          <input
            placeholder="Add Tags"
            type="text"
            name="tags"
            required
            className="border-1 w-full max-w-[800px] bg-[#1f1f1f]  rounded-xs px-2 py-0.5 "
          />
          <button
            type="submit"
            disabled={loading}
            value="Submit"
            className="border-1 w-full max-w-[800px] rounded-xs bg-[#ffffff] p-1 cursor-pointer text-[#b40000] font-bold"
          >
            {loading ? "Uploading Post..." : "Add to Feed"}
          </button>
        </form>
      </section>
    </>
  );
};

export default create_post;
