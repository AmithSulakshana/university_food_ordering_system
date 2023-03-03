import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import ScienceCanteen from "./pages/ScienceCanteen";
import JayathilakaCanteen from "./pages/JayathilakaCanteen";
import Logging from "./component/Logging";
import SingUp from "./component/SingUp";
import HeadlineCardsComponent from "./component/HeadlineCardsComponent";


  


function App() {

  return (
    <div>
    
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          {/* <Route path="/canteen/:id" element={<Canteen/>}/> */}
          <Route path="/canteen" element={<ScienceCanteen/>}/>
        </Routes>

        <Routes>
          {/* <Route path="/canteen/:id" element={<Canteen/>}/> */}
          <Route path="/jayathilakacanteen" element={<JayathilakaCanteen/>}/>
        </Routes>

        <Routes>
          {/* <Route path="/canteen/:id" element={<Canteen/>}/> */}
          <Route path="/Logging" element={<Logging/>}/>
        </Routes>

        <Routes>
          {/* <Route path="/canteen/:id" element={<Canteen/>}/> */}
          <Route path="/SingUp" element={<SingUp/>}/>
        </Routes>

        <Routes>
          {/* <Route path="/canteen/:id" element={<Canteen/>}/> */}
          <Route path="/HeadlineCardsComponent" element={<HeadlineCardsComponent/>}/>
        </Routes>


      </BrowserRouter>
    </div>
   
  );
}


export default App;
