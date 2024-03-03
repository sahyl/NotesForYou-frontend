import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/noteState.js";
import Alert from "./components/Alert.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  return (
    <NoteState>
      <BrowserRouter>
        <NavBar />
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route exact path="/" index element={<Home showAlert ={showAlert}/>} />
            <Route exact path="/about" index element={<About />} />
            <Route exact path="/login" index element={<Login showAlert ={showAlert}/>} />
            <Route exact path="/signup" index element={<Signup showAlert ={showAlert}/>} />




          </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
