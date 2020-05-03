import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SimpleMap from "./components/map/SimpleMap";
import "./index.css";

function App() {
  return (
    <div>
      <SimpleMap></SimpleMap>
      <ToastContainer autoClose={2000} hideProgressBar></ToastContainer>
    </div>
  );
}

export default App;
