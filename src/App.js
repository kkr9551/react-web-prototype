import React from 'react';
import Navigation from './components/Navbar';
import Main from './components/pages/Main';
import Visit from './components/pages/Visit';
import Exhibition from './components/pages/Exhibition';
import Learn from './components/pages/Learn';
import Banned from './components/pages/Banned';
import Support from './components/pages/Support';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation />
        
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/visit" element={<Visit />} />
            <Route path="/exhibition" element={<Exhibition />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/Banned" element={<Banned />} />
            <Route path="/Support" element={<Support />} />
          </Routes>
        
      </Router>
    </React.Fragment>
  );
}

export default App;

