import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes , Route, BrowserRouter} from "react-router-dom"
import Login from "../src/pages/login/login.jsx";
import SignUp from "../src/pages/signUp/SignUp.jsx";
import Home from '../src/pages/Home/Home.jsx'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login'  element={<Login/>} />
      <Route path='/signUp'  element={<SignUp/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
