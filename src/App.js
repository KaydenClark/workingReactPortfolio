import React from 'react';
// import logo from './kcLogo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

import Main from './pages'

function App() {
  
  return (
    <div className="App">
        <Router>
          <Main />
        </Router>
    </div>
  );
}

export default App;
