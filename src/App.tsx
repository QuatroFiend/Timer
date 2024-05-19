import React from 'react';
import './App.css';
import Clock from "./components/clock";

function App() {
  return (
    <div className="App">
        <div className="App-body">
            <span className={"App-title"}>Timer</span>
            <div>
                <Clock/>
            </div>
            <span className={"App-span"}>jsxquatro</span>
        </div>
    </div>
  );
}

export default App;
