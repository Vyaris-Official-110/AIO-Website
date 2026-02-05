import { Ship, Zap, Bitcoin, Rocket, GraduationCap, Building2, MapPin } from 'lucide-react';

const Investments = () => {
  const sectors = [
    { icon: Ship, name: 'Shipping & Logistics', color: 'from-blue-500 to-cyan-500' },
    { icon: Zap, name: 'Energy', color: 'from-yellow-500 to-orange-500' },
    { icon: Bitcoin, name: 'Digital Assets', color: 'from-purple-500 to-pink-500' },
    { icon: Rocket, name: 'Startups', color: 'from-green-500 to-emerald-500' },
    { icon: GraduationCap, name: 'Education', color: 'from-indigo-500 to-violet-500' },
    { icon: Building2, name: 'Real Estate', color: 'from-rose-500 to-red-500' },
  ];

  const regions = [
    { name: 'Singapore', flag: '🇸🇬', focus: 'Primary' },
    { name: 'India', flag: '🇮🇳', focus: 'Primary' },
    { name: 'Dubai', flag: '🇦🇪', focus: 'Primary' },
    { name: 'United Kingdom', flag: '🇬🇧', focus: 'Secondary' },
    { name: 'Asia Pacific', flag: '🌏', focus: 'Regional' },
    { name: 'Middle East', flag: '🌍', focus: 'Regional' },
  ];

  return (
    <section id="investments" className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 border border-secondary rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-primary rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6">
            Strategic <span className="text-gradient-gold">Investments</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A well-diversified portfolio with interests across various regions and
            industries, delivering consistent returns exceeding 15%.
          </p>
        </div>

        {/* Investment Sectors */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <MapPin className="inline w-6 h-6 mr-2 text-secondary" />
            Investment Sectors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="group relative bg-bg-card border border-border rounded-2xl p-6 text-center hover:border-secondary/50 transition-all duration-300 cursor-default overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <sector.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="font-semibold text-sm">{sector.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Target Regions */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <MapPin className="inline w-6 h-6 mr-2 text-secondary" />
            Target Regions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {regions.map((region, index) => (
              <div
                key={index}
                className="bg-bg-card border border-border rounded-2xl p-5 text-center hover:border-secondary/50 hover:bg-bg-card-hover transition-all duration-300"
              >
                <span className="text-4xl mb-3 block">{region.flag}</span>
                <h4 className="font-semibold text-sm mb-1">{region.name}</h4>
                <span className={`text-xs px-2 py-1 rounded-full ${region.focus === 'Primary'
                    ? 'bg-secondary/20 text-secondary'
                    : 'bg-white/10 text-text-muted'
                  }`}>
                  {region.focus}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Stats */}
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
  );
};

export default Investments;
