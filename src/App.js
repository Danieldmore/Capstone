import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingPage from './components/BookingPage';

import Nav from './components/Nav';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;