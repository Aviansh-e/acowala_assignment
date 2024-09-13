// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = ()=> {
  const pageSize = 6;
  const apiKey = "5d114a2214f8384ff648bb696ab5e59b";

  const[progress, setProgress] = useState(0);

    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar color='#f11946' progress={progress} onLoaderFinished={() => setProgress(0)} />
          <Routes>
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country='us' category='business' />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country='us' category='entertainment' />} />
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country='us' category='general' />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country='us' category='health' />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country='us' category='science' />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country='us' category='sports' />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country='us' category='technology' />} />
          </Routes>
        </BrowserRouter>
        
      </div>
    )
}

export default App;

