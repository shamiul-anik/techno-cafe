// import { useState } from 'react'
import './App.css'
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import MainContainer from './components/MainContainer/MainContainer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // const [count, setCount] = useState(0);

  const notifyInfo = () => toast.info('Spent time on read updated!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  
  const notifySuccess = () => toast.success('Bookmark added successfully!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const notifyError = () => toast.error('Bookmark already added!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  return (
    <div className="App">
      <Navbar></Navbar>
      <MainContainer notifyError={notifyError} notifySuccess={notifySuccess} notifyInfo={notifyInfo}></MainContainer>
      <ToastContainer />
    </div>
  );
}

export default App;
