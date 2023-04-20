import React from 'react';

const BookmarkedPost = ({ bookmark }) => {
  return (
    <div className="bookmarked-blog-title-container">
      <h6> {bookmark.blog_title} </h6>
    </div>
  );
};

export default BookmarkedPost;