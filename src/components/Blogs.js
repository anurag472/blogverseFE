import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Pagination from "./Pagination";
import User from "../user.png";
import { useNavigate } from "react-router-dom";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const getBlogs = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://blogapi.anurag47.me/blogs?page=${currentPage}&search=${searchInput}`
      );
      setBlogs(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, [currentPage, searchInput]);

  const resetPageNo = () => {
    setCurrentPage(1);
  };

  const increasePageNo = () => {
    setCurrentPage(currentPage + 1);
  };

  const decreasePageNo = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1);
  };
  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedBlogs = [...blogs].sort((a, b) => {
    if (sortOrder === "asc") {
      return new Date(a.createdAt) - new Date(b.createdAt);
    } else {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });

  const searchByinput = (e) => {
    setSearchInput(inputRef.current.value);
  };

  const goToBlogPage = (blog) => {
    navigate(`/blog/${encodeURIComponent(blog.name)}`);
  };

  return (
    <div className="w-2/3 mx-auto my-10">
      <div className="my-auto mx-auto w-full h-18 space-y-4 flex flex-col md:flex-row justify-evenly items-center mb-10">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded px-3 py-2"
            ref={inputRef}
          />
          <button
            className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold px-4 rounded"
            onClick={searchByinput}
          >
            Search
          </button>
        </div>
        <div className="space-y-2">
          <p>Sort by Created At</p>
          <select
            value={sortOrder}
            onChange={handleSortOrderChange}
            className="border border-gray-300 rounded px-3 py-2"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center flex-wrap">
        {isLoading ? (
          <div className="flex justify-center items-center w-full h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          sortedBlogs.map((blog, index) => {
            return (
              <div
                onClick={() => goToBlogPage(blog)}
                key={index}
                className="overflow-hidden w-[350px] h-[40vh] bg-center bg-cover m-4 md:h-[45vh] md:w-[350px] flex-col rounded-xl hover:scale-110 duration-300 relative"
              >
                <img
                  src={blog.image}
                  alt={blog.name}
                  className="w-full h-1/2 object-cover"
                />
                <div className="bg-gray-500 w-full h-1/2">
                  <h1 className=" px-6 py-6 md:text-3xl sm:text-lg">
                    {blog.name}
                  </h1>
                  <div className="flex px-4 space-x-4 items-center">
                    <img
                      src={User}
                      alt="User Icon"
                      className="w-8 h-8 rounded-full"
                    />
                    <p className="text-center">{blog.creator}</p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <Pagination
        resetPageNo={resetPageNo}
        decreasePageNo={decreasePageNo}
        increasePageNo={increasePageNo}
        page={currentPage}
      />
    </div>
  );
}

export default Blogs;
