import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Main/Home";
import { Create } from "./CURD/Create";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TravelCards } from "./Main/Packages";
import { UpdatePackage } from "./CURD/UpdatePackage";
import { Read } from "./CURD/Read";
import { ActiveUsers } from "./Users/ActiveUsers";


function App() {
  return (
     <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route  path="/createCard" element={<div className="create-main"><Create/></div>}/>
      <Route path="/packages" element={<TravelCards/>}/>
      <Route path="/updateInfo" element={<UpdatePackage/>}/>
      <Route path="/readinfo" element={<Read/>}/>
      <Route path="/users" element={<ActiveUsers/>}/>
     </Routes>
     </BrowserRouter>
     </>
  );
}

export default App;
