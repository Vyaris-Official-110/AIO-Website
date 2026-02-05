import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Investments', href: '/investments' },
    { name: 'Team', href: '/team' },
    { name: 'Investors', href: '/investors' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-bg-primary/95 backdrop-blur-xl border-b border-white/10 py-3'
          : 'py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center font-black text-primary-dark text-xl">
            AIO
          </div>
          <span className="text-xl font-bold">
            AIO <span className="text-secondary">Capital</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-medium text-sm transition-colors relative group ${isActive(link.href) ? 'text-white' : 'text-text-secondary hover:text-white'
                }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 gradient-gold transition-all duration-300 ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
              />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/contact"
            className="px-6 py-3 gradient-gold text-primary-dark font-semibold rounded-full shadow-gold hover:scale-105 transition-transform"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-white z-[60]"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Navigation */}
        <div
          className={`fixed top-0 right-0 w-80 h-screen bg-bg-secondary border-l border-white/10 transform transition-transform duration-300 z-50 lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="pt-24 px-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block py-4 text-lg font-medium transition-colors border-b border-white/5 ${isActive(link.href) ? 'text-secondary' : 'text-text-secondary hover:text-secondary'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-6 block w-full py-4 text-center gradient-gold text-primary-dark font-semibold rounded-full"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
