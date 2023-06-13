import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './Components/Navbar';
import { Toaster } from 'react-hot-toast';
import Summary from './pages/Summary';

function App() {
  return (
    <>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>

    </>
  );
}

export default App;
