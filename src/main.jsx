import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider } from "./context";
import { CartProvider } from "./context";
import { ScrollToTop } from "./components";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <CartProvider >
      <FilterProvider>
        <ScrollToTop />
        <ToastContainer closeButton={false} position={"top-center"} autoClose={2000}/>
        <App />
      </FilterProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>
);
