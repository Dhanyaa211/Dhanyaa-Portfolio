import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import LeetcodeIcon from './icons/LeetcodeIcon';
import CodolioIcon from './icons/CodolioIcon';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-6 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-glass rounded-full text-sm font-medium mb-8 text-visible">
            Here is my Profile!
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up text-visible">
          Kudos, I'm <span className="text-white">Dhanyaa RS</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-200 mb-8 animate-fade-in-up animation-delay-200 text-visible">
          Aspiring Data Analyst & Problem Solver
        </p>

        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-300 text-visible">
          Problem solver and critical thinker who thrives at the intersection of technology, communication, and leadership—always eager to learn, build, and contribute meaningfully.

        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-400">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all hover:scale-105 shadow-xl hover:shadow-blue-500/25"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-glass border-2 border-emerald-400/30 text-white rounded-lg font-semibold hover:bg-emerald-500/10 hover:border-emerald-400/50 transition-all hover:scale-105 backdrop-blur-sm"
          >
            Get in Touch
          </button>
        </div>

        <div className="flex justify-center gap-6 animate-fade-in-up animation-delay-500">
          <a
            href="https://github.com/Dhanyaa211"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-glass rounded-full hover:bg-glass-dark hover:shadow-lg hover:shadow-blue-500/20 transition-all hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/dhanyaars1126/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-glass rounded-full hover:bg-glass-dark hover:shadow-lg hover:shadow-blue-500/20 transition-all hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:dhanyaa211@gmail.com"
            className="p-3 bg-glass rounded-full hover:bg-glass-dark hover:shadow-lg hover:shadow-blue-500/20 transition-all hover:scale-110"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://leetcode.com/u/dhanyaa211/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-glass rounded-full hover:bg-glass-dark hover:shadow-lg hover:shadow-blue-500/20 transition-all hover:scale-110"
          >
            <LeetcodeIcon size={24} />
          </a>
          <a
            href="https://demo.codolio.com/profile/Dhanyaars1126"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-glass rounded-full hover:bg-glass-dark hover:shadow-lg hover:shadow-blue-500/20 transition-all hover:scale-110"
          >
            <CodolioIcon size={24} />
          </a>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown size={32} className="text-white/70" />
      </button>
    </section>
  );
}
