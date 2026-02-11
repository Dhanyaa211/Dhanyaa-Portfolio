import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dhanyaars1126/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dhanyaa211@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-visible">Portfolio</h3>
            <p className="text-gray-300 text-visible">Presenting in the digital forum</p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-glass rounded-full hover:bg-white/20 transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center gap-2 text-visible">
            Made with <Heart size={16} className="text-red-400 fill-current" /> © {currentYear} All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
