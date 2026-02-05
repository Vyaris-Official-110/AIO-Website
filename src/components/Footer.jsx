import { Linkedin, Mail, ArrowUp, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Investments', href: '/investments' },
    { name: 'Team', href: '/team' },
    { name: 'Investors', href: '/investors' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-bg-primary to-bg-primary" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 border-t border-white/10">
        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="glass rounded-3xl p-8 md:p-12 text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-gradient-gold">Invest</span> with Us?
            </h3>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Join our growing community of investors and benefit from strategic global investments.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 gradient-gold text-primary-dark font-bold rounded-full shadow-gold hover:scale-105 transition-transform"
            >
              Get Started Today
            </Link>
          </div>

          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 gradient-gold rounded-2xl flex items-center justify-center font-black text-primary-dark text-xl shadow-gold">
                  AIO
                </div>
                <div>
                  <span className="text-2xl font-bold block">
                    AIO <span className="text-secondary">Capital</span>
                  </span>
                  <span className="text-xs text-text-muted">Growth Capital Fund SPC</span>
                </div>
              </Link>
              <p className="text-text-secondary mb-6 leading-relaxed">
                A Segregated Portfolio Company incorporated in Cayman Islands,
                maximizing profits for investors while ensuring complete investment protection.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-text-secondary">
                  <MapPin size={16} className="text-secondary" />
                  <span className="text-sm">Cayman Islands</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <Mail size={16} className="text-secondary" />
                  <span className="text-sm">info@aiocapital.fund</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <Phone size={16} className="text-secondary" />
                  <span className="text-sm">+1 (345) XXX-XXXX</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <a href="#" className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-primary-dark transition-all group">
                  <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="mailto:info@aiocapital.fund" className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-primary-dark transition-all group">
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                Quick Links
              </h4>
              <ul className="space-y-4">
                {navLinks.slice(0, 3).map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-text-secondary hover:text-secondary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-secondary group-hover:w-3 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                Company
              </h4>
              <ul className="space-y-4">
                {navLinks.slice(3).map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-text-secondary hover:text-secondary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-secondary group-hover:w-3 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-muted text-sm">
              © {new Date().getFullYear()} AIO Growth Capital Fund SPC. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-gold"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="text-primary-dark" />
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <p className="text-text-muted text-xs text-center leading-relaxed">
              ⚠️ Investment involves risk. Past performance is not indicative of future results.
              This website is for informational purposes only and does not constitute investment advice.
              Please consult with a qualified financial advisor before making any investment decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
