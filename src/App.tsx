import { Navbar } from './components/navBar/NavBar';
import { Footer } from './components/footer/Footer';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        <Footer />
    </BrowserRouter>
  );
}