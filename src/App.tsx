import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import Certifications from './pages/Certifications';
import FIBC from './pages/FIBC';
import WPPSacks from './pages/WPPSacks';
import WPPFabric from './pages/WPPFabric';
import NonWovenBags from './pages/NonWovenBags';
import Quality from './pages/Quality';
import Facilities from './pages/Facilities';
import ContactUs from './pages/ContactUs';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/fibc" element={<FIBC />} />
            <Route path="/wpp-sacks" element={<WPPSacks />} />
            <Route path="/wpp-fabric" element={<WPPFabric />} />
            <Route path="/non-woven-bag" element={<NonWovenBags />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
