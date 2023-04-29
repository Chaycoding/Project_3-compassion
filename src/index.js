import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Mainbody from "./components/body";
import Header from "./components/header";
import About_section from "./components/About";
import Join_us from "./components/Join_us";
import ScrollToTop from "./scrollToTop";
import Community from "./components/community";
import Create_posts from "./components/create_post";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Mainbody />} />
        <Route path="/about" element={<About_section />} />
        <Route path="/join" element={<Join_us />} />
        <Route path="/community" element={<Community />} />
        <Route path="/your-story" element={<Create_posts />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
