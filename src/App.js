import React, {useState} from 'react';
import './App.css'
import {data} from './Components/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppChild from './AppChild';
import MoreInfo from './Pages/MoreInfo';



function App() {
const [dataMovie,setDataMovie] = useState(data) 

  return (

    <Router>
         <Routes>
           <Route index element={<AppChild dataMovie={dataMovie} setDataMovie={setDataMovie} />}/>
           <Route path="/Pages/:movieID" element={<MoreInfo movie={dataMovie} />} />
         </Routes>
    </Router>

  );
}

export default App