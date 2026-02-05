import { Target, TrendingUp, Shield, Landmark, Rocket, Users, Globe, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
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

  const initiatives = [
    {
      icon: Rocket,
      title: 'Diversification Strategies',
      description: 'Expanding investment opportunities across different sectors and asset classes for optimal risk management.',
    },
    {
      icon: Users,
      title: 'Client Engagement',
      description: 'Strengthening existing client relationships and attracting new investors. Currently in negotiations with 3 new clients.',
    },
    {
      icon: Globe,
      title: 'Global Expansion',
      description: 'Exploring opportunities for geographic expansion and strategic partnerships worldwide.',
    },
    {
      icon: MessageSquare,
      title: 'Investor Communication',
      description: 'Regular updates about fund performance, market insights, and strategic initiatives.',
    },
  ];

  const milestones = [
    { text: 'Current AUM of USD 25 million', done: true },
    { text: 'Targeting USD 50 million by end of 2024', done: false },
    { text: 'Obtaining FPI License in India', done: false },
    { text: 'Robust risk management protocols', done: true },
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Who We Are
          </span>
          <h1 className="text-5xl md:text-6xl font-black mt-3 mb-6">
            About <span className="text-gradient-gold">AIO Growth Capital</span>
          </h1>
          <p className="text-text-secondary text-xl max-w-3xl mx-auto">
            A group of seasoned professionals with a singular aim – to maximize profits
            for investors while ensuring complete investment protection.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left - Visual */}
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
              <h2 className="text-3xl font-bold mb-6">
                Building Long-Term <span className="text-secondary">Value</span>
              </h2>
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

      {/* Vision & Plan Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Looking Ahead
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6">
              Our <span className="text-gradient-gold">Vision & Plan</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Leveraging proven strategies and market expertise to achieve sustainable
              growth and maximize investor returns.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Initiatives */}
            <div className="grid sm:grid-cols-2 gap-6">
              {initiatives.map((item, index) => (
                <div
                  key={index}
                  className="bg-bg-card border border-border rounded-2xl p-6 hover:border-secondary/50 hover:bg-bg-card-hover transition-all duration-300 group"
                >
                  <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-primary-dark" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Milestones */}
            <div className="bg-bg-card border border-border rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Shield className="w-7 h-7 text-secondary" />
                Strategic Milestones
              </h3>

              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-xl ${milestone.done ? 'bg-green-500/10' : 'bg-white/5'
                      }`}
                  >
                    <CheckCircle2
                      className={`w-6 h-6 flex-shrink-0 ${milestone.done ? 'text-green-400' : 'text-text-muted'
                        }`}
                    />
                    <span className={milestone.done ? 'text-white' : 'text-text-secondary'}>
                      {milestone.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 gradient-gold rounded-xl">
                <p className="text-primary-dark font-bold text-center">
                  🎯 Target: USD 100M AUM by December 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-secondary">Invest</span> with Us?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Learn more about our investment opportunities and how we can help grow your portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/investments"
              className="px-8 py-4 gradient-gold text-primary-dark font-bold rounded-full shadow-gold hover:scale-105 transition-transform"
            >
              View Our Investments
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-secondary hover:text-secondary transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
