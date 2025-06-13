import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// 组件导入
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Team from './components/pages/Team';
import Education from './components/pages/Education';
import Research from './components/pages/Research';
import Publications from './components/pages/Publications';
import Projects from './components/pages/Projects';
import Downloads from './components/pages/Downloads';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟加载过程
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <div className="loading-spinner w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">加载中...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/education" element={<Education />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/downloads" element={<Downloads />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

