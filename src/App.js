import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  
  Route,
  Switch,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <div className="app">
   
    <Routes>
      <Route path="/login" ></Route>
       
        <Route path="/checkout" >
       
      </Route>

      <Route path="/" element={<Header/>}></Route>
    
    </Routes>
    </div>
  </BrowserRouter>
    
  );
}

export default App;
