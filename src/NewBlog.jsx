import React, { useEffect, useState } from "react";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");


  const handleInput = (e) => {
    e.preventDefault();

    const blog = { title, body, author };
    console.log(blog);

    setTitle("");
    setBody("");
    setAuthor("");

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("blog added");
    }).catch(err => err.message)
  };

  return (
    <div className="bg-purple-300 px-5 xl:px-15 h-[91.7vh] py-5">
      <h2 className="text-3xl font-semibold mb-10">Add new blogs</h2>
      <form className="ml-10 flex flex-col justify-start min-w-60 lg:w-1/3 space-y-2">
        <label>Add title: </label>
        <input
          className="outline-2 px-2"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Add blog: </label>
        <textarea
          className="outline-2 px-2"
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Author: </label>
        <input
          className="outline-2 px-2"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button
          onClick={handleInput}
          className="px-2 border-2 w-30 mt-5 py-1 rounded-sm bg-purple-400 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
