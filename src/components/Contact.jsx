import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'info@aiocapital.fund' },
    { icon: Phone, label: 'Phone', value: '+1 (345) XXX-XXXX' },
    { icon: MapPin, label: 'Location', value: 'Cayman Islands' },
  ];

  return (
    <section id="contact" className="py-24 bg-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Interested in learning more about investment opportunities?
            Get in touch with our team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's Start a Conversation</h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Whether you're looking to invest or simply want to learn more about
              AIO Growth Capital Fund, we're here to help. Reach out and our team
              will get back to you promptly.
            </p>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-14 h-14 gradient-gold rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary-dark" />
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-bg-card border border-border rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-secondary mx-auto mb-3" />
                <p className="text-text-secondary">Cayman Islands</p>
                <p className="text-text-muted text-sm">British Overseas Territory</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-bg-card border border-border rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16">
                <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                <p className="text-text-secondary text-center">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
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
                  <label className="block text-sm font-medium mb-2">Email Address</label>
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

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
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
                  <label className="block text-sm font-medium mb-2">Message</label>
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
  );
};

export default Contact;
