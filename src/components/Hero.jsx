import { ArrowRight, TrendingUp, Globe, Shield } from 'lucide-react';

const Hero = () => {
  const stats = [
    { value: '$25M', label: 'Assets Under Management', icon: TrendingUp },
    { value: '15%+', label: 'Investor Returns', icon: Shield },
    { value: 'Global', label: 'Investment Reach', icon: Globe },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-dark" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
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
        <div className="inline-flex items-center gap-2 px-5 py-2 glass rounded-full mb-8 animate-fadeInUp">
          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
          <span className="text-sm font-medium text-text-secondary">
            Cayman Islands Regulated Fund
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          Maximizing <span className="text-gradient-gold">Profits</span>
          <br />
          Ensuring <span className="text-secondary">Protection</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-10 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          AIO Growth Capital Fund SPC is a self-managed Segregated Portfolio Company
          delivering exceptional returns through strategic global investments.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <a
            href="#about"
            className="px-8 py-4 gradient-gold text-primary-dark font-bold rounded-full shadow-gold hover:scale-105 transition-transform flex items-center gap-2 text-lg"
          >
            Explore Our Vision
            <ArrowRight size={20} />
          </a>
          <a
            href="#investments"
            className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-secondary hover:text-secondary transition-all backdrop-blur-sm"
          >
            View Investments
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 hover:border-secondary/50 transition-all group"
            >
              <stat.icon className="w-8 h-8 text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-black text-gradient-gold mb-1">
                {stat.value}
              </div>
              <div className="text-text-secondary text-sm">{stat.label}</div>
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
  );
};

export default Hero;
