import React from 'react';
import './BlogPost.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const Blogs = ({ blog, handleReadTime, handleAddBookmark }) => {
  
  // console.log(blog);
  
  const { id, author_name, blog_title, images, read_time, related_tags, publish_date } = blog;

  return (
    <div className="card">
      {/* Card Image */}
      <div className="card-img">
        <img src={images.blog_cover} alt="Banner" />
      </div>
      {/* Card Body */}
      <div className="card-body">
        <div className="details-container">
          <div className="author-img">
            <img src={images.author_image} alt="Author" />
          </div>
          <div className="blog-details">
            <h5 className="author-name">{author_name}</h5>
            <p className="publish-date">{publish_date}</p>
          </div>
        </div>
        <div className="read-time-and-bookmark">
          <div className="reading-details">
            <span className="read-time">{read_time}</span> min read
          </div>
          <div className="icon-container">
            <a href="#bookmark-container" onClick={(event) => { event.preventDefault(); handleAddBookmark(blog); }}><FontAwesomeIcon icon={faBookmark} beat /></a>
          </div>
        </div>
      </div>
      {/* Blog Title */}
      <div className="blog-title">
        <h3>{blog_title}</h3>
      </div>
      {/* Tags */}
      <div className="tags">
        {related_tags?.map((tag) => <span key={tag}>#{tag}</span>)}
      </div>
      {/* Mark as Read */}
      <div className="mark-as-read">
        <a href="#time-spent" type="button" onClick={(event) => { event.preventDefault(); handleReadTime(read_time); }}>Mark as read</a>
      </div>
    </div>
  );
};

export default Blogs;