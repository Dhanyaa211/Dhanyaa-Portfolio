import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Data Visualization Intern',
      company: 'Infosys Springboard',
      period: 'Dec 2025 - Present',
      description: 'Optimized Cloud Infrastructure',
      achievements: [
        'Designed and deployed scalable cloud solutions using AWS services',
        'Enhancing system performance and cost efficiency',
    ],
    },
    {
      title: 'DevOps Intern',
      company: 'iGrad AI Labs',
      period: 'June 2025 - July 2025',
      description: 'Developed responsive web applications and collaborated with cross-functional teams to deliver high-quality products.',
      achievements: [
        'Built 15+ client projects from concept to deployment',
        'Implemented CI/CD pipelines reducing deployment time by 40%',
        'Introduced testing practices increasing code coverage to 85%',
      ],
    },
    {
      title: 'Cloud Deployment Intern',
      company: 'Reccsar Pvt Ltd',
      period: 'Jan 2025 - Jan 2025',
      description: 'Created engaging user interfaces and collaborated with designers to bring creative visions to life.',
      achievements: [
        'Developed responsive websites for 20+ clients',
        'Improved page performance scores to 90+ on Lighthouse',
        'Established component library used across multiple projects',
      ],
    },
  ];

  const leadershipActivities = [
    {
      title: 'Student Association President',
      organization: 'Computer Science and Business Systems',
      period: '2025 - 2026',
      description: 'Led student initiatives and represented student interests',
      achievements: [
        'Organized National Level Hackathons with 1000+ participants',
        'Organized International Conference on Emerging Technologies',
        'Organized AI Powered Project Expo in association with Navigate Labs',
      ],
    },
    {
      title: 'IEEE Information Theory Society Chairperson',
      organization: 'IEEE KPRIET Student Branch',
      period: '2025 - 2026',
      description: 'Represented the society and organized events to promote it',
      achievements: [
        'Conducted TechTalk\'25 to explore technical topics',
        'Organized InfoTech\'25 - a national level technical symposium',
      ],
    },
    {
      title: 'Youth Parliament President',
      organization: 'Sangamam KPRIET Cultural Club House',
      period: '2024 - 2025',
      description: 'Coordinated youth engagement activities on socially relevant topics',
      achievements: [
        'Organized GenSpark to introduce influencer marketing to students',
        'Invited Rtd Army Officer Subramanian for engaging students on civic responsibilities',
    
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-visible">
            Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto text-visible">
            My distinct milestones
          </p>
        </div>

        {/* Internships Section - Vertical Train Line */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-blue-400 mb-8 text-visible">Professional Experience</h3>
          <div className="relative">
            {/* Vertical train line for internships */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-teal-400"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                <div className="flex items-center mb-4 md:justify-end">
                  <div
                    className={`absolute left-8 md:left-1/2 w-4 h-4 bg-gray-700 border-4 ${
                      index === 0 ? 'border-blue-400' : index === 1 ? 'border-purple-400' : 'border-teal-400'
                    } rounded-full transform -translate-x-2 md:-translate-x-1/2`}
                  ></div>
                </div>

                <div
                  className={`ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'
                  } bg-glass rounded-xl hover:bg-glass-dark transition-all p-6 border-l-4 ${
                    index === 0 ? 'border-blue-400' : index === 1 ? 'border-purple-400' : 'border-teal-400'
                  } backdrop-blur-sm`}
                >
                  <div className="flex items-center mb-3">
                    <Briefcase className={`w-5 h-5 mr-2 ${
                      index === 0 ? 'text-blue-400' : index === 1 ? 'text-purple-400' : 'text-teal-400'
                    }`} />
                    <h3 className="text-xl font-bold text-white text-visible">{exp.title}</h3>
                  </div>

                  <div className="flex items-center text-gray-300 mb-2">
                    <span className="font-semibold text-visible">{exp.company}</span>
                  </div>

                  <div className="flex items-center text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm text-visible">{exp.period}</span>
                  </div>

                  <p className="text-gray-300 mb-4 text-visible text-left">{exp.description}</p>

                  <div className="space-y-2 text-left">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start">
                        <span className={`mr-2 ${
                          index === 0 ? 'text-blue-400' : index === 1 ? 'text-purple-400' : 'text-teal-400'
                        }`}>•</span>
                        <p className="text-gray-300 text-sm text-visible">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Section - Horizontal Train Line */}
        <div className="relative">
          {/* Branch connector */}
          <div className="hidden md:flex justify-center mb-8">
            <div className="w-0.5 h-12 bg-gradient-to-b from-teal-400 to-emerald-400"></div>
          </div>
          
          <h3 className="text-2xl font-bold text-center text-emerald-400 mb-8 text-visible">Leadership & Community</h3>
          
          <div className="relative">
            {/* Horizontal train line for leadership */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-lime-400"></div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {leadershipActivities.map((activity, index) => (
                <div key={index} className="relative">
                  {/* Train station dot - positioned on the line, outside the box */}
                  <div className={`hidden md:block absolute top-12 left-1/2 w-4 h-4 bg-slate-800 border-4 ${
                    index === 0 ? 'border-emerald-400' : index === 1 ? 'border-green-400' : 'border-lime-400'
                  } rounded-full transform -translate-x-1/2 -translate-y-2 z-20`}></div>
                  
                  {/* Leadership card */}
                  <div className={`bg-glass rounded-xl hover:bg-glass-dark transition-all p-6 border-l-4 ${
                    index === 0 ? 'border-emerald-400' : index === 1 ? 'border-green-400' : 'border-lime-400'
                  } backdrop-blur-sm mt-16`}>
                    <div className="flex items-center mb-3">
                      <Briefcase className={`w-5 h-5 mr-2 ${
                        index === 0 ? 'text-emerald-400' : index === 1 ? 'text-green-400' : 'text-lime-400'
                      }`} />
                      <h3 className="text-lg font-bold text-white text-visible">{activity.title}</h3>
                    </div>

                    <div className="flex items-center text-gray-300 mb-2">
                      <span className="font-semibold text-visible">{activity.organization}</span>
                    </div>

                    <div className="flex items-center text-gray-400 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm text-visible">{activity.period}</span>
                    </div>

                    <p className="text-gray-300 mb-4 text-visible text-left text-sm">{activity.description}</p>

                    <div className="space-y-1 text-left">
                      {activity.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start">
                          <span className={`mr-2 ${
                            index === 0 ? 'text-emerald-400' : index === 1 ? 'text-green-400' : 'text-lime-400'
                          }`}>•</span>
                          <p className="text-gray-300 text-xs text-visible">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
