import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import BookmarkedPost from '../BookmarkedPost/BookmarkedPost';

const Sidebar = ({minuteRead, addedBookmark}) => {
  const [totalReadTime, setTotalReadTime] = useState(minuteRead);
  // Showing Total Read Time from the Local Storage
  useEffect(() => {
    const getMinuteReadFromStorage = localStorage.getItem("readTime");
    setTotalReadTime(getMinuteReadFromStorage);
  }, [minuteRead]);

  return (
    <div>
      <div className="time-bookmark-container">
        {/* Sidebar Time Card */}
        <div id="time-spent" className="card sidebar-time-card">
          <h5>Spent time on read : <span className="total-read-time"> { totalReadTime ? totalReadTime : 0 } </span> min</h5>
        </div>

        {/* Bookmark Container */}
        <div id="bookmark-container" className="card bookmark-container">
          <h5>Bookmarked Blogs : <span className="bookmarked-blogs-number">{ addedBookmark?.length ? addedBookmark.length : 0 }</span></h5>
          
          {/* Bookmarked Blog's Title(s) */}
          { 
            addedBookmark?.map((bookmark, index) => <BookmarkedPost key={index} bookmark={bookmark}></BookmarkedPost>) 
          }
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;