import './App.css';
import Header from './components/common/navbar/Header';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import FooterMain from './components/common/footer/FooterMain';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FooterMain />
    </div>
  );
}

export default App;
