import { Code, Database, Server, Smartphone, Zap, Table, BarChart3, Computer } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Data Structure and Algorithms',
      skills: ['Java'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Table,
      title: 'Data Analysis',
      skills: ['Python', 'SQL', 'Pandas', 'NumPy'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: BarChart3,
      title: 'Data Visualization',
      skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau', 'Power BI'],
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Zap,
      title: 'Machine Learning',
      skills: ['Python','Ensemble Learning','Scikit-learn','Feature Engineering'],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Smartphone,
      title: 'Prompt Engineering',
      skills: ['ChatGPT', 'Claude', 'GPT-4', 'AI Integration', 'LLM Optimization', 'Gemini', 'Co-Pilot'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Database,
      title: 'Database Optimization',
      skills: ['MySQL', 'MongoDB', 'Query Optimization', 'Indexing', 'Performance Tuning'],
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Server,
      title: 'Cloud Management',
      skills: ['AWS', 'Oracle', 'Google Cloud'],
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Computer,
      title: 'Operating System',
      skills: ['Windows', 'Kali Linux'],
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section id="skills" className="py-20 relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-visible">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto text-visible">
            A comprehensive toolkit of technologies and skills I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-glass rounded-xl hover:bg-glass-dark transition-all duration-300 overflow-hidden hover:-translate-y-2 backdrop-blur-sm border border-white/10"
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} mr-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white text-visible">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-white/10 text-slate-200 rounded-full text-sm font-medium hover:bg-white/20 transition-colors backdrop-blur-sm text-visible"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
