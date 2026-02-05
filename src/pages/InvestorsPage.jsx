import { Building, Briefcase, Users, Wallet, TrendingUp, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestorsPage = () => {
  const investorTypes = [
    { icon: Building, label: 'Financial Institutions (FI)', percentage: 35, description: 'Banks and institutional investors' },
    { icon: Briefcase, label: 'Private Equities (PE)', percentage: 30, description: 'PE firms and fund managers' },
    { icon: Wallet, label: 'High Net Worth Individuals', percentage: 20, description: 'Qualified individual investors' },
    { icon: Users, label: 'Family Offices', percentage: 15, description: 'Multi-generational wealth managers' },
  ];

  const projections = [
    { year: 'Current', aum: '$25M', status: 'Active', description: 'Current Assets Under Management' },
    { year: 'Dec 2024', aum: '$50M', status: 'Target', description: 'Negotiations ongoing for $50M additional' },
    { year: 'Dec 2025', aum: '$100M', status: 'Projected', description: 'Long-term growth target' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Partners
          </span>
          <h1 className="text-5xl md:text-6xl font-black mt-3 mb-6">
            Our <span className="text-gradient-gold">Investors</span>
          </h1>
          <p className="text-text-secondary text-xl max-w-3xl mx-auto">
            A diverse investor base from around the globe, with focus on
            North America and Asia, trusting us with their investments.
          </p>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full">
            <Target className="w-5 h-5 text-secondary" />
            <span className="text-text-secondary">
              Investors from <span className="text-white font-semibold">North America</span>,{' '}
              <span className="text-white font-semibold">Asia</span>, and{' '}
              <span className="text-white font-semibold">Europe</span>
            </span>
          </div>
        </div>
      </section>

      {/* Investor Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Investor Composition</h2>
            <p className="text-text-secondary mt-4">Our diverse investor base by category</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investorTypes.map((type, index) => (
              <div
                key={index}
                className="bg-bg-card border border-border rounded-2xl p-6 hover:border-secondary/50 transition-all duration-300"
              >
                <type.icon className="w-12 h-12 text-secondary mb-4" />
                <h4 className="font-bold text-lg mb-2">{type.label}</h4>
                <p className="text-text-secondary text-sm mb-4">{type.description}</p>
                <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full gradient-gold rounded-full transition-all duration-1000"
                    style={{ width: `${type.percentage}%` }}
                  />
                </div>
                <p className="text-secondary font-bold mt-2 text-2xl">{type.percentage}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUM Projections */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              <TrendingUp className="inline w-8 h-8 mr-2 text-secondary" />
              AUM Growth Trajectory
            </h2>
            <p className="text-text-secondary mt-4">
              Strong growth with negotiations ongoing for additional investment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {projections.map((item, index) => (
              <div
                key={index}
                className={`text-center p-10 rounded-3xl ${item.status === 'Active'
                    ? 'bg-secondary/10 border-2 border-secondary'
                    : 'bg-bg-card border border-border'
                  }`}
              >
                <p className="text-text-secondary text-sm mb-2">{item.year}</p>
                <div className={`text-5xl font-black mb-3 ${item.status === 'Active' ? 'text-secondary' : 'text-white'
                  }`}>
                  {item.aum}
                </div>
                <span className={`inline-block text-xs px-4 py-1.5 rounded-full mb-4 ${item.status === 'Active'
                    ? 'bg-secondary text-primary-dark'
                    : item.status === 'Target'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                  {item.status}
                </span>
                <p className="text-text-secondary text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest With Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Invest With <span className="text-secondary">AIO</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-gradient-gold mb-3">15%+</div>
              <h4 className="font-bold mb-2">Consistent Returns</h4>
              <p className="text-text-secondary text-sm">Proven track record of delivering above-market returns</p>
            </div>
            <div className="glass rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-gradient-gold mb-3">Global</div>
              <h4 className="font-bold mb-2">Diversified Portfolio</h4>
              <p className="text-text-secondary text-sm">Investments across multiple sectors and geographies</p>
            </div>
            <div className="glass rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-gradient-gold mb-3">Expert</div>
              <h4 className="font-bold mb-2">Professional Team</h4>
              <p className="text-text-secondary text-sm">Decades of combined investment management experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Become an <span className="text-secondary">Investor</span>
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Join our growing community of investors and benefit from strategic global investments.
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 gradient-gold text-primary-dark font-bold rounded-full shadow-gold hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InvestorsPage;
