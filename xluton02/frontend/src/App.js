import NavBar from './components/NavBar/main'
import { Routes , Route } from 'react-router-dom';


import Home from './pages'
import Search from './pages/Search.js'
import Add from './pages/Add.js'

require("es6-promise").polyfill();
require("isomorphic-fetch");

const App = () => {
  

    return (
      <div>
        <NavBar />
        <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/Search' element = {<Search />} />
            <Route path='/Add' element = {<Add/>} />
        </Routes>
      </div>
  );
}


export default App;
