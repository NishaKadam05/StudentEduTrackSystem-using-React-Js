import React from "react";
import Sidebar from './components/sidebar';
import Dashboard from './components/dashboard';
import './App.css';

function App(){
  return(
    <div className="leftRight">
      <div>
      </div>
      <div>
        <Dashboard/>
      </div>
    </div>
  )
}

export default App;