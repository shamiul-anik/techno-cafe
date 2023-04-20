import React, { useState, useEffect } from 'react';
import './MainContainer.css';
import BlogPost from '../BlogPost/BlogPost';
import Sidebar from '../Sidebar/Sidebar';
import Blog from '../Blog/Blog';
import { toast } from 'react-toastify';

const BlogContainer = ({ notifyError, notifySuccess, notifyInfo }) => {
  const [blogs, setBlogs] = useState([]);
  const [minuteRead, setMinuteRead] = useState(0);
  const [addedBookmark, setAddedBookmark] = useState([]);

  // Get Blog Posts from Local API/JSON File
  useEffect(() => {
    fetch('./data/blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  // Adding Read Time to the Local Storage
  const handleReadTime = (readTime) => {
    // toast.dismiss(); // dismiss previous toast
    const convertedReadTime = JSON.parse(Number(readTime));
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousReadTime) {
      const totalReadTime = previousReadTime + convertedReadTime;
      localStorage.setItem("readTime", totalReadTime);
      setMinuteRead(totalReadTime);
    }
    else {
      localStorage.setItem("readTime", convertedReadTime);
      setMinuteRead(convertedReadTime);
    }
    notifyInfo();
  };

  // Showing bookmarked list from local storage
  useEffect(() => {
    const bookMark = JSON.parse(localStorage.getItem("bookMark"));
    setAddedBookmark(bookMark);
  }, []);

  // Adding Bookmark
  const handleAddBookmark = (blog) => {
    let newBookmark = [];
    let previousBookMark = JSON.parse(localStorage.getItem("bookMark"));
    if (previousBookMark) {
      const checkExistence = previousBookMark.find((bookMark) => bookMark.id === blog.id); // check if bookmark already added
      if (checkExistence) {
        notifyError(); // if bookmark added previously, showing toast
        return;
      }
      else {
        previousBookMark.push(blog);
        localStorage.setItem("bookMark", JSON.stringify(previousBookMark));
        setAddedBookmark(previousBookMark);
        notifySuccess();
      }
    }
    else {
      newBookmark.push(blog);
      localStorage.setItem("bookMark", JSON.stringify(newBookmark));
      setAddedBookmark(newBookmark);
    }
  };

  return (
    <div className="container">
      <div className="main-blogs-container">
        {blogs.map((blog) => <BlogPost key={blog.id} blog={blog} handleReadTime={handleReadTime} handleAddBookmark={handleAddBookmark}></BlogPost>)}
      </div>
      <Sidebar minuteRead={minuteRead} addedBookmark={addedBookmark}></Sidebar>
      <Blog></Blog>
    </div>
  );
};

export default BlogContainer;