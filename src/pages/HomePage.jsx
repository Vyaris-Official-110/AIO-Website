import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Globe, Shield, Users, Briefcase, Building2 } from 'lucide-react';

const HomePage = () => {
  const stats = [
    { value: '$25M', label: 'Assets Under Management', icon: TrendingUp },
    { value: '15%+', label: 'Investor Returns', icon: Shield },
    { value: 'Global', label: 'Investment Reach', icon: Globe },
  ];

  const highlights = [
    {
      icon: Building2,
      title: 'About Us',
      description: 'Cayman Islands SPC incorporated in 2021, maximizing profits while ensuring investment protection.',
      link: '/about',
    },
    {
      icon: Briefcase,
      title: 'Investments',
      description: 'Diversified portfolio across Shipping, Energy, Digital Assets, Startups, and Real Estate.',
      link: '/investments',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'Experienced professionals with decades of investment management expertise.',
      link: '/team',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements - Capital Navy gradient */}
        <div className="absolute inset-0 gradient-dark" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-light/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 glass-dark rounded-full mb-8 animate-fadeInUp">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-text-light/80">
              Cayman Islands Regulated Fund
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight animate-fadeInUp text-text-light" style={{ animationDelay: '0.1s' }}>
            Maximizing <span className="text-gradient-gold">Profits</span>
            <br />
            Ensuring <span className="text-secondary-light">Protection</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-text-light/80 max-w-3xl mx-auto mb-10 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            AIO Growth Capital Fund SPC is a self-managed Segregated Portfolio Company
            delivering exceptional returns through strategic global investments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/about"
              className="px-8 py-4 gradient-success text-text-light font-bold rounded-full shadow-emerald hover:scale-105 transition-transform flex items-center gap-2 text-lg"
            >
              Explore Our Vision
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/investments"
              className="px-8 py-4 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-primary-dark transition-all backdrop-blur-sm"
            >
              View Investments
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-dark rounded-2xl p-6 hover:border-secondary/50 transition-all group"
              >
                <stat.icon className="w-8 h-8 text-secondary-light mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-black text-gradient-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-text-light/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-secondary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Discover More
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6 text-primary">
              Why <span className="text-gradient-gold">Choose AIO</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              A trusted investment partner with global reach and proven expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="group bg-bg-card border border-border shadow-navy rounded-2xl p-8 hover:border-secondary/50 hover:bg-bg-card-hover transition-all duration-300"
              >
                <div className="w-16 h-16 gradient-success rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-text-light" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-text-secondary mb-4">{item.description}</p>
                <span className="inline-flex items-center gap-2 text-secondary font-semibold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 gradient-success text-text-light font-bold rounded-full shadow-emerald hover:scale-105 transition-transform text-lg"
            >
              Get In Touch
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
