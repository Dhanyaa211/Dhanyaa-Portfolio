import { Briefcase, Award, Mic, Code, Heart } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Briefcase, value: '3', label: 'Internships' },
    { icon: Award, value: '5+', label: 'Projects' },
    { icon: Mic, value: '50+', label: 'Stages' },
    { icon: Code, value: '200+', label: 'LeetCode' },
    { icon: Heart, value: '100%', label: 'Professionalism' },
  ];

  return (
    <section id="about" className="py-20 relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-visible">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-bold text-white mb-6 text-visible" style={{ WebkitTextStroke: '1px white' }}>
              Turning Ideas Into Reality
            </h3>
            <p className="text-lg text-slate-300 mb-4 leading-relaxed text-visible">
              I am a driven and curious technologist with a strong foundation in Java programming and data analysis, complemented by a deep interest in problem-solving and logical thinking. I enjoy breaking down complex challenges, designing efficient solutions, and continuously sharpening my technical skills through hands-on projects and competitive problem solving.
            </p>
            <p className="text-lg text-slate-300 mb-4 leading-relaxed text-visible">
              Beyond technology, I excel in oratory and debates, where I bring clarity, confidence, and critical thinking to every discussion. My ability to articulate ideas effectively, defend viewpoints logically, and engage diverse audiences has shaped me into a strong communicator and persuasive speaker.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed text-visible">
              Recognized as an academic topper, I consistently strive for excellence while balancing leadership responsibilities. I have demonstrated leadership skills by taking initiative, collaborating with teams, and driving ideas from concept to execution. I approach every opportunity with curiosity, discipline, and a mindset focused on impact.

            </p>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/60 via-emerald-400/60 to-purple-400/60 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-glass-dark rounded-2xl backdrop-blur-sm overflow-hidden">
                <img 
                  src="/Dhanyaa.jpg" 
                  alt="Dhanyaa RS" 
                  className="w-full h-full object-cover rounded-2xl"
                  style={{ 
                    aspectRatio: '3/4',
                    minHeight: '400px',
                    maxHeight: '500px'
                  }}
                  onLoad={(e) => {
                    // Hide fallback when image loads successfully
                    const fallback = e.currentTarget.parentElement?.querySelector('.fallback-icon') as HTMLElement;
                    if (fallback) fallback.style.display = 'none';
                  }}
                  onError={(e) => {
                    // Show fallback if image fails to load
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.fallback-icon') as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder - hidden by default */}
                <div className="fallback-icon absolute inset-0 flex items-center justify-center bg-slate-800/50 rounded-2xl" style={{ display: 'none' }}>
                  <Briefcase size={120} className="text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-4 md:p-6 bg-glass rounded-xl hover:bg-glass-dark transition-all hover:scale-105 backdrop-blur-sm"
              >
                <Icon className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-4 text-blue-400" />
                <div className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2 text-visible">{stat.value}</div>
                <div className="text-xs md:text-sm text-slate-300 text-visible">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
