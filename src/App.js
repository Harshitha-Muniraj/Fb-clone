import { Profiler, useContext, useEffect, useState } from "react";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import StyleContext from "./context/StyleContext";

function App() {
  const {theme,darkMode, lightMode}  =  useContext(StyleContext)
  const [currentTheme, setCurrentTheme] = useState("lightMode");
  useEffect(()=>{
    const theme = localStorage.getItem("theme")
    if(theme=="lightMode"){
           setCurrentTheme("lightMode")
           lightMode()
           localStorage.setItem("theme","lightMode")
        }
   else if(theme=="darkMode"){
           setCurrentTheme("darkMode")
           darkMode()
           localStorage.setItem("theme","darkMode")
  }
    
},[])

  return (
    <div style={{color:`${theme.color}`,backgroundColor:`${theme.backgroundColor}`}}>

    
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile/:id" element={<Profile/>} />
      </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
