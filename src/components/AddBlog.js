import React, { useState } from "react";
import axios from "axios";

export default function AddBlog() {
  const [formData, setFormData] = useState({
    creator: "",
    name: "",
    content: "",
    image: null,
  });
  const postBlog = async () => {
    try {
      await axios.post("http://localhost:5000/create", formData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postBlog();
    alert("Blog added successfully");
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    const fileSize = file.size / 1024;
    const maxSize = 70;
    if (fileSize > maxSize) {
      alert("Image size should not exceed 70KB");
      return false;
    }
    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="flex justify-center my-10">
      <div className="max-w-md bg-gray-300 shadow-md rounded-md p-6">
        <h2 className="text-xl font-bold mb-4">Add Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Author</label>
            <input
              type="text"
              name="creator"
              placeholder="Please enter your name"
              value={formData.author}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Title of Blog</label>
            <input
              type="text"
              name="name"
              placeholder="Title"
              value={formData.title}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Content of Blog</label>
            <textarea
              name="content"
              placeholder="Content"
              value={formData.content}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Image for Blog</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Add Blog
          </button>
        </form>
        <button
          onClick={() => {
            window.location.href = "/";
          }}
          className="bg-gray-500 text-white py-2 px-4 rounded-md mt-4"
        >
          Go to Home Page
        </button>
      </div>
    </div>
  );
}
