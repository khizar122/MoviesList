
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './component/Home';
import Login from './component/Login';
import ErrorComp from './component/ErrorComp';
import About from './component/About';
import Contact from './component/Contact';
import Register from './component/Register';
import { UserAuthContextProvider } from './Context/UserAuthContext';
import ProtectedRoute from './component/ProtectedRoute';


function App() {
  
  
  return (

    <div className="App">

      <Router>

<UserAuthContextProvider>
        <Routes>

          <Route path='/' element={<Login/>}></Route>
          <Route path='/home' element={<ProtectedRoute>
            <Home></Home>
            </ProtectedRoute>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/signup' element={<Register></Register>}></Route>
          <Route path='*' element={<ErrorComp/>}></Route>

        </Routes>
        </UserAuthContextProvider>
      </Router>

    </div>
  );
}

export default App;
