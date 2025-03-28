import React, { useState, useEffect } from "react";

const BlogItems = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect((e) => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    fetch("http://localhost:8000/blogs/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching blogs, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setBlogList(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    })
     .then((res)=> {return res.json()})
      .then((data) => {
        console.log("Blog deleted");
        setBlogList(data)
      })
      .catch((error) =>
        console.error("There was a problem with the delete request:", error)
      );
  };

  return (
    <div className="py-5 space-y-10">
      <h1 className="text-4xl">Here are some blogs</h1>
      {blogList &&
        blogList.map((blog) => (
          <div key={blog.id} className="space-y-3">
            <h2 className="text-2xl font-semibold">{blog.title}</h2>
            <p className="px-3 overflow-hidden">{blog.body}</p>
            <h3 className="text-lg font-semibold">~{blog.author}</h3>
            <button
              onClick={() => handleDelete(blog.id)} 
              className="px-2 rounded-sm shadow-sm bg-purple-400 cursor-pointer hover:bg-purple-500"
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default BlogItems;