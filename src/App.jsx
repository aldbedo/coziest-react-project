import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Shop from './pages/Shop'
import SizeChart from './pages/SizeChart'
import About from './pages/About'
import Contact from './pages/Contact'
import Faqs from './pages/Faqs'
import './index.css'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/size-chart" element={<SizeChart />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </Router>
  )
}

export default App
