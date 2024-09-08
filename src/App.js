import "./App.css";
import Main from "./components/Main";
import { useState } from "react";
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Delhi from "./components/Delhi"
import Manjnukatila from "./components/Manjukatila";
import Mehrauli from "./components/Mehrauli";

export default function App() {

  const[loggedin,setloggedin]=useState(false);
  return (
    <div>
      {/* <Navbar loggedin={loggedin}  setloggedin={setloggedin}></Navbar> */}
      <Routes> 
      <Route path='/' element={<Main  loggedin={loggedin}  setloggedin={setloggedin}/> }/>
      <Route path="/home" element={<Home loggedin={loggedin} setloggedin={setloggedin} />} />
      <Route path="/delhi" element={<Delhi/>}/>
      <Route path="/manju" element={<Manjnukatila/>}/>
      <Route path="/mehruli" element={<Mehrauli/>}/>
      
      </Routes>  
    </div>
  );
}