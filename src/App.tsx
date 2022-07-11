import React from 'react';
import Board from './view/board';
import Detail from './components/detail';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

const App =() => {
return(
        <>
        <Router>
            <Routes>
                <Route path="/detail/:id" element={<Detail/>} />
                <Route path="/" element={<Board />} />
            </Routes>
        </Router>
    </>   
    )
}

export default App;
