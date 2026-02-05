import { Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeamPage = () => {
  const executives = [
    {
      name: 'Paul Boskma',
      role: 'Director',
      description: 'Seasoned Investment Manager with extensive experience across Mauritius, Malta, Cyprus, and Curacao. Expert in portfolio management, financial due diligence, and strategic investment decisions.',
      fullBio: 'In the capacity of an Investment Manager at various prominent wealth management firms, he was a vital member of a specialized team responsible for managing portfolios across various funds situated in jurisdictions such as Mauritius, Malta, Cyprus, and Curacao. Possessing the authority to formulate investment strategies and objectives, the Investment Manager delegates day-to-day asset management while retaining ultimate responsibility for the Fund\'s investments. Key responsibilities included identifying potential target companies, particularly in emerging markets, and conducting meticulous financial due diligence.',
      highlights: [
        'Investment strategy formulation',
        'Emerging markets specialist',
        'Portfolio management expertise',
        'Financial due diligence expert'
      ]
    },
    {
      name: 'Harshavardhan Sinha',
      role: 'Director',
      description: '45+ years of diverse experience across FMCG, Education, Investments, Energy, Chemicals, and Pharmaceuticals. Founder of Incubit Group with operations in UK, UAE, Singapore, Cayman Islands, and India.',
      fullBio: 'Over 45 years of diverse experience across multiple industries, including FMCG, Education, Investments, Energy, Chemicals, and Pharmaceuticals. Proven track record in leadership roles, including board memberships, with a focus on driving corporate success. Founded Incubit Group three years ago, leading it to success with a diverse portfolio of companies and assets in the UK, UAE, Singapore, Cayman Islands, and India. Incubit Group\'s operations span advisory services, back-office solutions, investments, Crypto, Energy, and education sectors, with strategic investments in PE funds.',
      highlights: [
        '45+ years industry experience',
        'Incubit Group founder',
        'Strategic & visionary leadership',
        'Multi-sector expertise'
      ]
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Leadership
          </span>
          <h1 className="text-5xl md:text-6xl font-black mt-3 mb-6">
            Meet Our <span className="text-gradient-gold">Key Executives</span>
          </h1>
          <p className="text-text-secondary text-xl max-w-3xl mx-auto">
            Experienced professionals ensuring trust, growth, and long-lasting
            relationships with our investors.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            {executives.map((exec, index) => (
              <div
                key={index}
                className="bg-bg-card border border-border rounded-3xl p-8 md:p-12"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Avatar & Info */}
                  <div className="md:col-span-1">
                    <div className="w-32 h-32 gradient-gold rounded-2xl flex items-center justify-center mb-6">
                      <span className="text-4xl font-black text-primary-dark">
                        {exec.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold">{exec.name}</h3>
                    <p className="text-secondary font-semibold mb-4">{exec.role}</p>

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

                  {/* Bio & Highlights */}
                  <div className="md:col-span-2">
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {exec.fullBio}
                    </p>

                    <h4 className="font-bold text-lg mb-4">Key Expertise</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {exec.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                          <span className="w-2 h-2 bg-secondary rounded-full" />
                          <span className="text-text-secondary text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-16 bg-bg-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass rounded-3xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Team Philosophy</h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Our experienced professionals ensure that the time, effort, investments,
              and most importantly, the trust that our investors have reposed in us
              are repaid not just monetarily, but with a solid base and sound understanding
              that helps build long-lasting relationships.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-secondary">Partner</span> with Us?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Get in touch with our team to discuss investment opportunities.
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 gradient-gold text-primary-dark font-bold rounded-full shadow-gold hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            Contact Our Team <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
