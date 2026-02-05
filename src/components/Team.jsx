import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const executives = [
    {
      name: 'Paul Boskma',
      role: 'Director',
      image: null,
      description: 'Seasoned Investment Manager with extensive experience across Mauritius, Malta, Cyprus, and Curacao. Expert in portfolio management, financial due diligence, and strategic investment decisions.',
      highlights: [
        'Investment strategy formulation',
        'Emerging markets specialist',
        'Portfolio management expertise'
      ]
    },
    {
      name: 'Harshavardhan Sinha',
      role: 'Director',
      image: null,
      description: '45+ years of diverse experience across FMCG, Education, Investments, Energy, Chemicals, and Pharmaceuticals. Founder of Incubit Group with operations in UK, UAE, Singapore, Cayman Islands, and India.',
      highlights: [
        '45+ years industry experience',
        'Incubit Group founder',
        'Strategic & visionary leadership'
      ]
    },
  ];

  return (
    <section id="team" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary via-bg-primary to-bg-secondary" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6">
            Meet Our <span className="text-gradient-gold">Key Executives</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Experienced professionals ensuring trust, growth, and long-lasting
            relationships with our investors.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {executives.map((exec, index) => (
            <div
              key={index}
              className="group bg-bg-card border border-border rounded-3xl p-8 hover:border-secondary/50 transition-all duration-300"
            >
              {/* Avatar */}
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 gradient-gold rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-black text-primary-dark">
                    {exec.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{exec.name}</h3>
                  <p className="text-secondary font-semibold">{exec.role}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed mb-6">
                {exec.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-6">
                {exec.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-text-secondary text-sm">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-secondary hover:text-primary-dark transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-secondary hover:text-primary-dark transition-all">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Team Overview */}
        <div className="mt-16 glass rounded-3xl p-10 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Our Team Philosophy</h3>
          <p className="text-text-secondary text-lg leading-relaxed">
            Our experienced professionals ensure that the time, effort, investments,
            and most importantly, the trust that our investors have reposed in us
            are repaid not just monetarily, but with a solid base and sound understanding
            that helps build long-lasting relationships.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
