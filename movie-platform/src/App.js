import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './route/Home';
import Detail from './route/Detail';
import React from 'react';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
);
}

export default App;
