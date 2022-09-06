import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  const element = <div className="header">
    <h1>Student Mark Calculation</h1>
    <label>Enter the Name :</label>
    <input type="text" placeholder="Enter the name"></input><br></br><br></br>
    <label>Enter the Tamil marks   :</label>
    <input type="text" placeholder="Enter the Tamil marks"></input><br></br><br></br>
    <label>Enter the English marks :</label>
    <input type="text" placeholder="Enter the English marks"></input><br></br><br></br>
    <label>Enter the Maths Marks   :</label>
    <input type="text" placeholder="Enter the Maths Marks"></input><br></br><br></br>
    <label>Enter the Science Marks :</label>
    <input type="text" placeholder="Enter the Science Marks"></input><br></br><br></br>
    <label>Enter the Social Marks  :</label>
    <input type="text" placeholder="Enter the Social Marks"></input><br></br><br></br>
    <input type="Submit"></input>
  </div>
  root.render(element);