import { ExternalLink, Github, Layers } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Multimodal Recognition System',
      description: 'Advanced AI system that combines computer vision and natural language processing to recognize and analyze multiple data types including images, text, and audio for comprehensive understanding.',
      tags: ['Python', 'TensorFlow', 'OpenCV', 'NLP', 'Machine Learning'],
      image: 'public/Projects/multimodal.jpg',
      github: 'https://github.com/Dhanyaa211/Multimodal/tree/main/Multimodal',
      demo: 'https://example.com',
    },
    {
      title: 'Weather Prediction App',
      description: 'Intelligent weather forecasting application using machine learning algorithms to predict weather patterns with high accuracy, featuring real-time data visualization and alerts.',
      tags: ['Python', 'Scikit-learn', 'APIs', 'Data Visualization', 'Pandas'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Dhanyaa211/Weather-App-Updated',
      demo: 'https://example.com',
    },
    {
      title: 'IT Support Performance Analytics',
      description: 'Comprehensive analytics platform that tracks and analyzes IT support team performance metrics, ticket resolution times, and customer satisfaction to optimize support operations.',
      tags: ['Data Analysis', 'Dashboard', 'SQL', 'Power BI', 'Performance Metrics'],
      image: 'public/Projects/it_support.jpg',
      github: 'https://github.com/Dhanyaa211/DV---Optimizing-IT-Support-Team-Performance-Using-Analytics-Supportlytics-',
      demo: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="py-20 relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-visible">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto text-visible">
            A showcase of my recent work and personal projects that demonstrate my skills and passion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-glass rounded-xl overflow-hidden hover:bg-glass-dark transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm border border-white/10"
            >
              <div className="relative h-48 overflow-hidden bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='; }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Github size={20} className="text-gray-900" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink size={20} className="text-gray-900" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Layers className="w-5 h-5 text-blue-400 mr-2" />
                  <h3 className="text-xl font-bold text-white text-visible">{project.title}</h3>
                </div>
                <p className="text-slate-300 mb-4 line-clamp-3 text-visible">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium backdrop-blur-sm text-visible"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
