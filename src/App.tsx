import React from 'react';
import Board from './components/Board';
import Detail from './components/Detail';
import NavBar from './components/nav-bar.component';

import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

const App =() => {
return(
        <>
        <NavBar />
        <Router>
            <Routes>
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/" element={<Board />} />
            </Routes>
        </Router>
    </>   
    )
}

export default App;
