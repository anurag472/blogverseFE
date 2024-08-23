import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function FullBlog() {
  const { blogName } = useParams();
  const [blog, setBlog] = useState(null);
  const getBlog = async () => {
    try {
      const response = await axios.get(
        `https://blogapi.anurag47.me/blogs?search=${decodeURIComponent(blogName)}`
      );
      setBlog(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div className="p-8">
      {blog ? (
        <>
          <h1 className="text-3xl font-bold mb-2 text-center">{blog.name}</h1>
          <h3 className="text-lg text-gray-600 mb-4 text-center">
            By {blog.creator}
          </h3>
          <img className="w-full mb-4" src={blog.image} alt={blog.name} />
          <p className="text-lg">{blog.content}</p>
        </>
      ) : (
        <div className="flex justify-center items-center w-full h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
    </div>
  );
}
