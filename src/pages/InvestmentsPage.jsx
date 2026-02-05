import { Ship, Zap, Bitcoin, Rocket, GraduationCap, Building2, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestmentsPage = () => {
  const sectors = [
    { icon: Ship, name: 'Shipping & Logistics', color: 'from-blue-500 to-cyan-500', description: 'Global maritime and logistics investments' },
    { icon: Zap, name: 'Energy', color: 'from-yellow-500 to-orange-500', description: 'Renewable and traditional energy sectors' },
    { icon: Bitcoin, name: 'Digital Assets', color: 'from-purple-500 to-pink-500', description: 'Cryptocurrency and blockchain technology' },
    { icon: Rocket, name: 'Startups', color: 'from-green-500 to-emerald-500', description: 'Early-stage venture investments' },
    { icon: GraduationCap, name: 'Education', color: 'from-indigo-500 to-violet-500', description: 'EdTech and educational institutions' },
    { icon: Building2, name: 'Real Estate', color: 'from-rose-500 to-red-500', description: 'Commercial and residential properties' },
  ];

  const regions = [
    { name: 'Singapore', flag: '🇸🇬', focus: 'Primary', description: 'Southeast Asian hub' },
    { name: 'India', flag: '🇮🇳', focus: 'Primary', description: 'Emerging market growth' },
    { name: 'Dubai', flag: '🇦🇪', focus: 'Primary', description: 'Middle Eastern gateway' },
    { name: 'United Kingdom', flag: '🇬🇧', focus: 'Secondary', description: 'European investments' },
    { name: 'Asia Pacific', flag: '🌏', focus: 'Regional', description: 'Broad regional exposure' },
    { name: 'Middle East', flag: '🌍', focus: 'Regional', description: 'Strategic partnerships' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Portfolio
          </span>
          <h1 className="text-5xl md:text-6xl font-black mt-3 mb-6">
            Strategic <span className="text-gradient-gold">Investments</span>
          </h1>
          <p className="text-text-secondary text-xl max-w-3xl mx-auto">
            A well-diversified portfolio with interests across various regions and
            industries, delivering consistent returns exceeding 15%.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 text-center">
              <div className="text-5xl font-black text-gradient-gold mb-2">15%+</div>
              <p className="text-text-secondary">Current Investor Returns</p>
            </div>
            <div className="glass rounded-2xl p-8 text-center">
              <div className="text-5xl font-black text-gradient-gold mb-2">Listed</div>
              <p className="text-text-secondary">& Unlisted Securities</p>
            </div>
            <div className="glass rounded-2xl p-8 text-center">
              <div className="text-5xl font-black text-gradient-gold mb-2">Global</div>
              <p className="text-text-secondary">Diversified Portfolio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Sectors */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              <MapPin className="inline w-8 h-8 mr-2 text-secondary" />
              Investment Sectors
            </h2>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
              Our diversified approach spans multiple sectors, reducing risk while maximizing growth opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="group relative bg-bg-card border border-border rounded-2xl p-8 hover:border-secondary/50 transition-all duration-300 cursor-default overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative z-10">
                  <div className="w-16 h-16 mb-4 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <sector.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="font-bold text-xl mb-2">{sector.name}</h4>
                  <p className="text-text-secondary">{sector.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Regions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              <MapPin className="inline w-8 h-8 mr-2 text-secondary" />
              Target Regions
            </h2>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
              Focused on high-growth regions with strategic investment opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <div
                key={index}
                className="bg-bg-card border border-border rounded-2xl p-6 hover:border-secondary/50 hover:bg-bg-card-hover transition-all duration-300"
              >
                <span className="text-5xl mb-4 block">{region.flag}</span>
                <h4 className="font-bold text-lg mb-1">{region.name}</h4>
                <p className="text-text-secondary text-sm mb-3">{region.description}</p>
                <span className={`text-xs px-3 py-1 rounded-full ${region.focus === 'Primary'
                    ? 'bg-secondary/20 text-secondary'
                    : 'bg-white/10 text-text-muted'
                  }`}>
                  {region.focus} Focus
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in Our <span className="text-secondary">Portfolio</span>?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Learn more about investment opportunities or speak with our team about partnership possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/investors"
              className="px-8 py-4 gradient-gold text-primary-dark font-bold rounded-full shadow-gold hover:scale-105 transition-transform inline-flex items-center gap-2"
            >
              For Investors <ArrowRight size={18} />
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

export default InvestmentsPage;
