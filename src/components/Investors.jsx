import { Building, Briefcase, Users, Wallet, TrendingUp, Target } from 'lucide-react';

const Investors = () => {
  const investorTypes = [
    { icon: Building, label: 'Financial Institutions (FI)', percentage: 35 },
    { icon: Briefcase, label: 'Private Equities (PE)', percentage: 30 },
    { icon: Wallet, label: 'High Net Worth Individuals', percentage: 20 },
    { icon: Users, label: 'Family Offices', percentage: 15 },
  ];

  const projections = [
    { year: 'Current', aum: '$25M', status: 'Active' },
    { year: 'Dec 2024', aum: '$50M', status: 'Target' },
    { year: 'Dec 2025', aum: '$100M', status: 'Projected' },
  ];

  return (
    <section id="investors" className="py-24 bg-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6">
            Our <span className="text-gradient-gold">Investors</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A diverse investor base from around the globe, with focus on
            North America and Asia, trusting us with their investments.
          </p>
        </div>

        {/* Investor Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {investorTypes.map((type, index) => (
            <div
              key={index}
              className="bg-bg-card border border-border rounded-2xl p-6 hover:border-secondary/50 transition-all duration-300"
            >
              <type.icon className="w-10 h-10 text-secondary mb-4" />
              <h4 className="font-bold mb-3">{type.label}</h4>
              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full gradient-gold rounded-full"
                  style={{ width: `${type.percentage}%` }}
                />
              </div>
              <p className="text-secondary font-bold mt-2">{type.percentage}%</p>
            </div>
          ))}
        </div>

        {/* AUM Projections */}
        <div className="glass rounded-3xl p-10">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2">
              <TrendingUp className="inline w-6 h-6 mr-2 text-secondary" />
              AUM Growth Trajectory
            </h3>
            <p className="text-text-secondary">
              Strong growth with negotiations ongoing for additional $50M investment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projections.map((item, index) => (
              <div
                key={index}
                className={`text-center p-8 rounded-2xl ${item.status === 'Active'
                    ? 'bg-secondary/10 border-2 border-secondary'
                    : 'bg-white/5 border border-white/10'
                  }`}
              >
                <p className="text-text-secondary text-sm mb-2">{item.year}</p>
                <div className={`text-4xl font-black mb-2 ${item.status === 'Active' ? 'text-secondary' : 'text-white'
                  }`}>
                  {item.aum}
                </div>
                <span className={`text-xs px-3 py-1 rounded-full ${item.status === 'Active'
                    ? 'bg-secondary text-primary-dark'
                    : item.status === 'Target'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Global Presence Note */}
        <div className="mt-10 text-center">
          <p className="text-text-secondary">
            <Target className="inline w-5 h-5 mr-2 text-secondary" />
            Investors from <span className="text-white font-semibold">North America</span>,{' '}
            <span className="text-white font-semibold">Asia</span>, and{' '}
            <span className="text-white font-semibold">Europe</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Investors;
