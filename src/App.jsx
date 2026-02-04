// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import AdminPage from './pages/AdminPage';
import About from './pages/About';
// import Services from './pages/Services';
// import Blogs from './pages/Blogs';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<Blogs />} /> */}
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/admin' element={<AdminPage />} />
             <Route path="/services/:slug" element={<ServiceDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;