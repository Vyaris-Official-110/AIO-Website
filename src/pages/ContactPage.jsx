import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    investorType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: '', email: '', phone: '', subject: '', investorType: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'info@aiocapital.fund', href: 'mailto:info@aiocapital.fund' },
    { icon: Phone, label: 'Phone', value: '+1 (345) XXX-XXXX', href: 'tel:+1345XXXXXXX' },
    { icon: MapPin, label: 'Location', value: 'Cayman Islands', href: '#' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-black mt-3 mb-6">
            Contact <span className="text-gradient-gold">Us</span>
          </h1>
          <p className="text-text-secondary text-xl max-w-3xl mx-auto">
            Interested in learning more about investment opportunities?
            Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Let's Start a Conversation</h2>
              <p className="text-text-secondary mb-8 leading-relaxed text-lg">
                Whether you're looking to invest or simply want to learn more about
                AIO Growth Capital Fund, we're here to help. Reach out and our team
                will get back to you promptly.
              </p>

              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-14 h-14 gradient-gold rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-primary-dark" />
                    </div>
                    <div>
                      <p className="text-text-muted text-sm">{item.label}</p>
                      <p className="font-semibold group-hover:text-secondary transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Office Hours */}
              <div className="bg-bg-card border border-border rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4">Office Hours</h3>
                <div className="space-y-2 text-text-secondary">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 aspect-video bg-bg-card border border-border rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-secondary mx-auto mb-3" />
                  <p className="font-bold">Cayman Islands</p>
                  <p className="text-text-muted text-sm">British Overseas Territory</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-bg-card border border-border rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16">
                  <CheckCircle className="w-20 h-20 text-green-400 mb-4" />
                  <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-text-secondary text-center max-w-md">
                    Thank you for reaching out. A member of our team will get back to you within 24-48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-border rounded-xl focus:border-secondary focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-border rounded-xl focus:border-secondary focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-border rounded-xl focus:border-secondary focus:outline-none transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Investor Type</label>
                      <select
                        name="investorType"
                        value={formState.investorType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-border rounded-xl focus:border-secondary focus:outline-none transition-colors"
                      >
                        <option value="">Select type</option>
                        <option value="individual">Individual Investor</option>
                        <option value="institutional">Institutional Investor</option>
                        <option value="family-office">Family Office</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-border rounded-xl focus:border-secondary focus:outline-none transition-colors"
                      placeholder="Investment Inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-border rounded-xl focus:border-secondary focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your investment goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 gradient-gold text-primary-dark font-bold rounded-xl shadow-gold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
