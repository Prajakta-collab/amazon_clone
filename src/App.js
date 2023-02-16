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
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
    <div className="app">
   
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
       
        <Route path="/checkout" element={<><Header/> <Checkout/></>}>
       
      </Route>

      <Route path="/" element={<><Header/><Home/></>}></Route>
    
    </Routes>
    </div>
  </BrowserRouter>
    
  );
}

export default App;
