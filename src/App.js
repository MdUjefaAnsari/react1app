import React from "react";
import  'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from "./Components/HomePage/HomePage";


function App() {
  return (
<BrowserRouter>
<Header />
<Routes>
<Route path="/" element={<><HomePage /></>} />
<Route path="/Learn" element={<>learn page</>} />
<Route path="/Refrence" element={<>Refernce page</>} />
<Route path="/Community" element={<>Community page</>} />
<Route path="/ourcommunity" element={<>ourommunity page</>} />
<Route path="/mycommunity" element={<>myommunity page</>} />

<Route path="/Blog" element={<>Blog page</>} />
<Route path="/git" element={<>git page</>} />
<Route path="/product" element={<>product page</>} />
<Route path="/Register" element={<>Register page</>} />
</Routes>
<Footer />
</BrowserRouter>
  
  );
}


export default App;
