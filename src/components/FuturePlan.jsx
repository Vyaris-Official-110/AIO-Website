import { Rocket, Users, Globe, MessageSquare, Shield, CheckCircle2 } from 'lucide-react';

const FuturePlan = () => {
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
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Looking Ahead
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6">
            Our <span className="text-gradient-gold">Plan Ahead</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Leveraging proven strategies and market expertise to achieve sustainable
            growth and maximize investor returns.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Initiatives */}
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

          {/* Right - Milestones */}
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
  );
};

export default FuturePlan;
