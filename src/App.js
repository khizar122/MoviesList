
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './component/Home';
import Login from './component/Login';
import ErrorComp from './component/ErrorComp';
import About from './component/About';
import Contact from './component/Contact';


function App() {
  
  
  return (

    <div className="App">

      <Router>

        <Routes>

          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='*' element={<ErrorComp/>}></Route>

        </Routes>

      </Router>

    </div>
  );
}

export default App;
