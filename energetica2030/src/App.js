import React from 'react';
import Routing from "./routes/Routing.js";
import { ToastContainer } from "react-toastify";

import './App.scss';

function App() {
  return (
    <>
      <Routing></Routing>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisivilityChange
        draggable
        pauseOnHover
      ></ToastContainer>
    </>
  );
}

export default App;
