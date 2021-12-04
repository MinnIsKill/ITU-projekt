import { useState, useEffect } from 'react';
import NavBar from './components/NavBar/main'
import { Routes , Route } from 'react-router-dom';


import Home from './pages'
import Search from './pages/Search.js'
import Add from './pages/Add.js'

require("es6-promise").polyfill();
require("isomorphic-fetch");

const App = () => {
  
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/dumpStudents',{method: "GET"})
        .then(response => response.json())
        .then((json) => setData(json.students))
    }, []);

    return (
      <div>
        <NavBar />
        <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/Search' element = {<Search data = { data }  />} />
            <Route path='/Add' element = {<Add/>} />
        </Routes>
      </div>
  );
}


export default App;
