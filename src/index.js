import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Footer />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <App/>
);
