import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create_post from "./create_post";
import Feed from "./feed";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/create-post" element={<Create_post />} />
      </Routes>
    </Router>
  );
};

export default App;
