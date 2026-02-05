import { Target, TrendingUp, Shield, Landmark } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Landmark,
      title: 'Cayman Islands SPC',
      description: 'Incorporated in 2021 under Cayman Islands laws as a self-managed Segregated Portfolio Company.',
    },
    {
      icon: Target,
      title: 'Cat I FPI Registration',
      description: 'In process of registration as Category I FPI with SEBI for investing in Indian listed securities.',
    },
    {
      icon: TrendingUp,
      title: 'Capital Appreciation',
      description: 'Targeting capital appreciation through hedge funds, debt, real estate, startups, and global equities.',
    },
    {
      icon: Shield,
      title: 'Investment Protection',
      description: 'Ensuring full investment protection while maximizing profits for our valued investors.',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6">
            About <span className="text-gradient-gold">AIO Growth Capital</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A group of seasoned professionals with a singular aim – to maximize profits
            for investors while ensuring complete investment protection.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl gradient-primary p-1">
              <div className="w-full h-full bg-bg-card rounded-3xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 gradient-gold rounded-3xl flex items-center justify-center">
                    <span className="text-5xl font-black text-primary-dark">AIO</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Since 2021</h3>
                  <p className="text-text-secondary">Creating Value Globally</p>
                </div>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 glass rounded-2xl flex items-center justify-center animate-float">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">$25M</div>
                <div className="text-xs text-text-muted">AUM</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-28 h-28 glass rounded-2xl flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">1</div>
                <div className="text-xs text-text-muted">Successful Fund</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Building Long-Term <span className="text-secondary">Value</span>
            </h3>
            <p className="text-text-secondary mb-6 text-lg leading-relaxed">
              Since our inception, we have made strategic forays across the globe,
              creating substantial value for our investments. Our diversified approach
              spans multiple asset classes and geographies.
            </p>
            <p className="text-text-secondary mb-8 text-lg leading-relaxed">
              With a current AUM of $25 million and returns exceeding 15%, we continue
              to expand our global footprint with a focus on Asia, UK, and the Middle East,
              particularly Singapore, India, and Dubai.
            </p>

            {/* Investment Areas */}
            <div className="flex flex-wrap gap-3">
              {['Hedge Funds', 'Real Estate', 'Startups', 'Digital Assets', 'Listed Equity'].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-bg-card border border-border rounded-full text-sm text-text-secondary hover:border-secondary hover:text-secondary transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-bg-card border border-border rounded-2xl p-6 hover:border-secondary/50 hover:bg-bg-card-hover transition-all duration-300"
            >
              <div className="w-14 h-14 gradient-gold rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary-dark" />
              </div>
              <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
