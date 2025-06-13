import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: '首页', path: '/' },
    {
      name: '研究团队',
      path: '/team',
      dropdown: [
        { name: '全职教师', path: '/team#faculty' },
        { name: '特聘专家', path: '/team#experts' },
        { name: '兼职专家', path: '/team#adjunct' },
        { name: '博士后', path: '/team#postdoc' },
        { name: '博/硕士生', path: '/team#students' },
        { name: '组内毕业生', path: '/team#alumni' }
      ]
    },
    {
      name: '人才培养',
      path: '/education',
      dropdown: [
        { name: '本科生课程', path: '/education#undergraduate' },
        { name: '研究生课程', path: '/education#graduate' },
        { name: '学生活动', path: '/education#activities' }
      ]
    },
    { name: '研究内容', path: '/research' },
    {
      name: '研究成果',
      path: '/publications',
      dropdown: [
        { name: '期刊论文', path: '/publications#journals' },
        { name: '学术著作', path: '/publications#books' }
      ]
    },
    {
      name: '科研项目',
      path: '/projects',
      dropdown: [
        { name: '国家重点研发计划', path: '/projects#national' },
        { name: '国家自然科学基金', path: '/projects#nsfc' },
        { name: '省部级课题', path: '/projects#provincial' },
        { name: '横向课题', path: '/projects#horizontal' }
      ]
    },
    {
      name: '数据下载',
      path: '/downloads',
      dropdown: [
        { name: '数据总览', path: '/downloads#overview' },
        { name: '数据集', path: '/downloads#datasets' },
        { name: '开源代码', path: '/downloads#code' },
        { name: '论文资料', path: '/downloads#papers' }
      ]
    }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'navbar-blur shadow-lg' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">清</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">热质传递与热系统课题组</h1>
              <p className="text-sm text-gray-600">清华大学</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1"
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-50"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 py-4"
          >
            {navigation.map((item) => (
              <div key={item.name} className="space-y-1">
                <Link
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;

