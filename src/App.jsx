import { useState, useEffect, useRef } from 'react';
import { Menu, X, Download, Github, ExternalLink, Mail, Phone, ChevronRight, Code, GraduationCap, User } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  // Improved scroll handling
  useEffect(() => {
    const handleScroll = () => {
      if (!menuOpen) {
        setScrolled(window.scrollY > 20);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    
    // Lock body scroll when menu is open
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = 'auto';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      // Cleanup scroll lock
      document.body.style.overflow = 'auto';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [menuOpen]);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Code className="w-5 h-5" /> },
    { name: 'Projects', path: '/projects', icon: <Code className="w-5 h-5" /> },
    { name: 'Education', path: '/education', icon: <GraduationCap className="w-5 h-5" /> },
    { name: 'About', path: '/about', icon: <User className="w-5 h-5" /> },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative">
      {/* Navigation */}
      <nav 
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Lewis Nyakaru
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center transition-all duration-300 hover:text-blue-400 ${
                  location.pathname === link.path ? 'text-blue-400 font-medium' : 'text-gray-300'
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white z-50"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`
          fixed inset-0 bg-gray-900/95 z-40 md:hidden 
          transition-all duration-300 ease-in-out
          ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
          pt-24
        `}>
          <div className="flex flex-col items-center gap-8 pt-8 h-full overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 text-lg transition-all duration-300 hover:text-blue-400 ${
                  location.pathname === link.path ? 'text-blue-400 font-medium' : 'text-gray-300'
                }`}
                onClick={closeMenu}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-12">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/60 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="mailto:lewis.nyakaru@gmail.com" className="hover:text-blue-400 transition-colors duration-300">
              <Mail size={20} />
            </a>
            <a href="https://github.com" className="hover:text-blue-400 transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="tel:+254797053213" className="hover:text-blue-400 transition-colors duration-300">
              <Phone size={20} />
            </a>
          </div>
          <p>© {new Date().getFullYear()} Lewis Nyakaru. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}