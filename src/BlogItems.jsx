import React, { useState, useEffect } from "react";

const BlogItems = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("http://localhost:8000/blogs/");
      if (!response.ok) {
        throw new Error(`Error fetching blogs, status: ${response.status}`);
      }
      const data = await response.json();
      setBlogList(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`Error deleting blog, status: ${response.status}`);
      }
      // Update the blog list to remove the deleted item
      setBlogList(blogList.filter((blog) => blog.id !== id));
      console.log("Blog deleted successfully");
    } catch (error) {
      console.error("There was a problem with the delete request:", error);
    }
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