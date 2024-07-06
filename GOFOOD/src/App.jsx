import './App.css'
import Home from './screens/Home'
import {BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Login } from './screens/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Signup } from './screens/Signup';



function App() {

  return (
    <Router>
      <div>
        <Routes>
           <Route exact path="/" element = {<Home/>} />
           <Route exact path="/Signup" element = {<Signup/>} />
           <Route exact path="/login" element = {<Login/>} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
