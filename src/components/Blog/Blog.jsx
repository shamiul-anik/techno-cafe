import React from 'react';
import './Blog.css';
import BlogBanner from '../../assets/react-banner.png';

const Blog = () => {
  return (
    <div className="blog-main-container">
      <div className="qa-blog-container">
        <h1 className="qa-blog-title">React Q&A Blog</h1>
        <div className="card">
          {/* Card Image */}
          <div className="question-img">
            <img src={BlogBanner} alt="Q&A Banner" />
          </div>
          {/* Question-1 */}
          <div className="question-text">
            <h3>1. Write down some differences between props and state in React.</h3>
          </div>
          <div className="answer-container">
            <p>
              <span className="answer">Answer:</span> <br />
              In React, <span className="fw-bold">props</span> and <span className="fw-bold">state</span> are both used to manage data and pass it between components. <br /> <br />
              However, there are some key differences: <br />
              <span className="fw-bold">Props</span> are passed down from a parent component to a child component and cannot be modified by the child. They are essentially read-only. <br />
              <span className="fw-bold">State</span>, on the other hand, is managed within a component and can be modified by the component itself. It is used to store data that can change over time, such as user input or component interactions. <br /> <br />
              So in summary- <span className="fw-bold">props</span> are passed down from a parent and cannot be modified, while <span className="fw-bold">state</span> is managed within a component and can be changed.  
            </p>
          </div>
          {/* Question-2 */}
          <div className="question-text">
            <h3>2. How does useState work?</h3>
          </div>
          <div className="answer-container">
            <p>
              <span className="answer">Answer:</span><br />
              <span className="fw-bold">"useState"</span> is a function in React that allows a functional component to have a state. The state is a value that can be updated and affects what the component looks like and how it behaves. <br />  <br />
              When the <span className="fw-bold">useState</span> function is called, it gives the user two things: the current state value and a function that user can use to update the state value. When user updates the state, React re-renders the component with the new state value. <br /> <br />
              That's the basic idea of how <span className="fw-bold">useState</span> works in React. It allows functional components to have state that can be updated and used to control the component's behavior and appearance.
            </p>
          </div>
          {/* Question-3 */}
          <div className="question-text">
            <h3>3. What are the purposes/usage of useEffect other than fetching data?</h3>
          </div>
          <div className="answer-container">
            <p>
              <span className="answer">Answer:</span> <br />
              <span className="fw-bold">"useEffect"</span> is a function in React that allows the user to perform actions that are not related to rendering the component. <br /> <br />
              For example, it can be used to update the document title, manage timers, subscribe to events, or manipulate the DOM. <br /> <br />
              When <span className="fw-bold">useEffect</span> is called, it is passed as a function that will be executed after the component is rendered. This function can return another function that will be executed when the component is unmounted. <br /> <br />
              By using <span className="fw-bold">useEffect</span>, user can manage the component's behavior and interactions with the outside world in a predictable and declarative way. <br /><br />
              In general, <span className="fw-bold">useEffect</span> is used whenever it's needed to perform some action that is not directly related to rendering the component. It allows the user to manage the component's behavior and interactions with the outside world in a declarative and predictable way.
            </p>
          </div>
          {/* Question-4 */}
          <div className="question-text">
            <h3>4. How Does React work?</h3>
          </div>
          <div className="answer-container">
            <p>
              <span className="answer">Answer:</span> <br />
              <span className="fw-bold">React</span> is a JavaScript library for building user interfaces. It works by breaking the UI down into small, reusable components that can be composed together to create more complex interfaces. <br /><br />
              When a React component is rendered, it generates a tree of virtual DOM nodes that describe the component's structure and content. The virtual DOM is a lightweight representation of the actual DOM, and it allows React to efficiently update the UI when the component's <span className="fw-bold">state</span> or <span className="fw-bold">props</span> change. <br /><br />
              When the component's <span className="fw-bold">state</span> or <span className="fw-bold">props</span> change, React compares the new virtual DOM tree to the previous one and determines which parts of the UI need to be updated. It then applies the minimum number of changes to the actual DOM to reflect the new state of the component. <br /> <br />
              This approach makes React very efficient and fast, since it avoids unnecessary DOM manipulation and only updates the parts of the UI that need to be changed. It also makes it easy to reason about the component's behavior and to test it in isolation from the rest of the application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;