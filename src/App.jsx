import { useState, useEffect } from 'react'; 
import { Menu, X, Download, Github, ExternalLink, Mail, Phone, ChevronRight,Code, GraduationCap, User } from 'lucide-react';
import HomePage from '/src/pages/Home';
import ProjectsPage from '/src/pages/Projects';
import EducationPage from '/src/pages/Education';
import AboutPage from '/src/pages/About';

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: 'Home', path: 'home', icon: <Code className="w-5 h-5" /> },
    { name: 'Projects', path: 'projects', icon: <Code className="w-5 h-5" /> },
    { name: 'Education', path: 'education', icon: <GraduationCap className="w-5 h-5" /> },
    { name: 'About', path: 'about', icon: <User className="w-5 h-5" /> },
  ];

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when selecting a page
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Lewis Nyakaru
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handlePageChange(link.path)}
                className={`flex items-center transition-all duration-300 hover:text-blue-400 ${
                  currentPage === link.path ? 'text-blue-400 font-medium' : 'text-gray-300'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="md:hidden text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="fixed inset-0 bg-gray-900/95 z-40 md:hidden pt-20">
            <div className="flex flex-col items-center gap-8 pt-8">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handlePageChange(link.path)}
                  className={`flex items-center gap-2 text-lg transition-all duration-300 hover:text-blue-400 ${
                    currentPage === link.path ? 'text-blue-400 font-medium' : 'text-gray-300'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-12">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'projects' && <ProjectsPage />}
        {currentPage === 'education' && <EducationPage />}
        {currentPage === 'about' && <AboutPage />}
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