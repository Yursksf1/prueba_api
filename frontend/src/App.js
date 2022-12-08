import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import axios from "axios";

import Home from './components/Home'
import PageGet from './components/PageGet'
import PagePost from './components/PagePost'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/page1" element={<PageGet/>}/>
        <Route exact path="/page2" element={<PagePost/>}/>
      </Routes>
    </Router>
  );
}

export default App;