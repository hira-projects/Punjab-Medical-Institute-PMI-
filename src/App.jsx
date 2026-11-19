

// import React from 'react'
import { HelmetProvider } from "react-helmet-async";
import React, { useEffect, useState } from "react";
import Loading from './Pages/Loadi/Loading'
import Home from './Pages/Home'
import About from './Pages/About'
import Programs from './Pages/Programs'
import Facilities from './Pages/Facilities'
import Contact from './Pages/Contact'
// PROGRAMS PAGES
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MedicalDiploma from './Pages/Program/MedicalDiploma'
import BsCs from './Pages/Program/BsCs'
import Adp from './Pages/Program/Adp'
import BbaBaf from './Pages/Program/BbaBaf'
import ShortCourses from './Pages/Program/ShortCourses'
// Facilities Pages
import Environment from './Pages/Facilities/Environment'
import Library from './Pages/Facilities/Library'
import MediLabs from './Pages/Facilities/MediLabs'
import Cafeteria from './Pages/Facilities/Cafeteria'
import Sports from './Pages/Facilities/Sports'
import ComLabs from './Pages/Facilities/ComLabs'
import AboutNav from "./components/ui/AboutNav";
import AboutFoot from "./components/ui/AboutFoot";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
    <HelmetProvider>
    <BrowserRouter>
    <AboutNav />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/programs' element={<Programs/>} />
      <Route path='/facilities' element= {<Facilities />} />

      {/* programs routwe pages */}
          <Route path='/Programs/adp' element= {<Adp/>} />
        <Route path='/Programs/diploma' element={<MedicalDiploma/>} />
        <Route path='/Programs/bscs' element= {<BsCs />} />
        <Route path='/Programs/bba' element= {<BbaBaf />} />    
      <Route path='/Programs/short-courses' element= {<ShortCourses />} />
      {/* // Facilities Pages */}
      <Route path='/Facilities/Environment' element= {<Environment />} />
         <Route path='/Facilities/library' element= {<Library />} />
         <Route path='/Facilities/labs' element= {<MediLabs />} />
         <Route path='/Facilities/cmlabs' element= {<ComLabs />} />
         <Route path='/Facilities/cafeteria' element= {<Cafeteria />} />
         <Route path='/Facilities/sports' element= {<Sports />} />
        <Route path='/Contact' element={<Contact/>} />
            
    </Routes>    
    <AboutFoot />
    </BrowserRouter>
    </HelmetProvider>
     {/* <Home /> */}  
    </>
     
  )
}
export default App
