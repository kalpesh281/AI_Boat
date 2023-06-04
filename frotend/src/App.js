import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="login" element={<Login/>} />
    </Routes>

    </>
  );
}

export default App;
