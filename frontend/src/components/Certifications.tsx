import { Award, X, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<any>(null);

  const certifications = [
    {
      title: 'AWS Cloud Quest: Cloud Practioner',
      organization: 'Amazon Web Services',
      image: '/Certificates/cloud quest cloud practioner.jpg',
      issueDate: '7/6/2025',
      credentialId: '22972443-b1d4-43f0-9652-a32932530bfa',
      verificationUrl: 'https://www.credly.com/earner/earned/badge/22972443-b1d4-43f0-9652-a32932530bfa',
    },
    {
      title: 'Github Foundations Certification',
      organization: 'Github',
      image: '/Certificates/Github.png',
      issueDate: '7/12/2025',
      credentialId: '6841744B3F27CF1B',
    },
    {
      title: 'MongoDB Certified Associate Atlas Administrator',
      organization: 'MongoDB',
      image: '/Certificates/MongoDBCertifiedAssociateAtlasAdministrator_Badge20250708-26-f0v31t.jpg',
      issueDate: '7/8/2025',
      credentialId: '8f0b3dbd-64fd-4c2f-873e-f3708393dcca',
      verificationUrl: 'https://www.credly.com/earner/earned/badge/8f0b3dbd-64fd-4c2f-873e-f3708393dcca',
    },
    {
      title: 'Getting Started with DevOps on AWS',
      organization: 'AWS',
      image: '/Certificates/getting started with devops.jpg',
      issueDate: '29/7/2025',
      credentialId: '6841744B3F27CF1B',
    },
    {
      title: 'Oracle Certified Foundations Associate',
      organization: 'Oracle',
      image: '/Certificates/Oracle.jpg',
      issueDate: '24/6/2025',
      credentialId: '101884794OCI25DCFA',
    },
    {
      title: 'JP Morgan SE Job Simulation',
      organization: 'Forage',
      image: '/Certificates/JP Morgan SE Job Simulation.jpg',
      issueDate: '4/12/2025',
      credentialId: 'QoigfRQJHkka2bHyn',
    },
    {
      title: 'Deloitte Data Analysis Job Simulation',
      organization: 'Forage',
      image: '/Certificates/deloitte.jpg',
      issueDate: '31/1/2025',
      credentialId: ' QoigfRQJHkka2bHyn',
    },
  ];

  return (
    <>
      <section id="certifications" className="py-20 relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-visible">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto text-visible">
              Professional certifications that validate my expertise and commitment to continuous learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-glass rounded-xl overflow-hidden hover:bg-glass-dark transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm border border-white/10 cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="relative h-48 overflow-hidden bg-gray-800/50">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain p-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                      View Certificate
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Award className="w-5 h-5 text-blue-400 mr-2" />
                    <h3 className="text-xl font-bold text-white text-visible">{cert.title}</h3>
                  </div>
                  <p className="text-blue-300 font-medium mb-4 text-visible">{cert.organization}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium backdrop-blur-sm text-visible">
                      {cert.issueDate}
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium backdrop-blur-sm text-visible">
                      {cert.credentialId}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedCert(null)}>
          <div className="bg-glass-dark rounded-2xl max-w-6xl max-h-[90vh] w-full overflow-auto backdrop-blur-md border border-white/20" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              {/* Close button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
              >
                <X size={24} className="text-white" />
              </button>

              {/* Certificate Image viewer */}
              <div className="p-6">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[600px] object-contain rounded-xl mx-auto"
                />
                <div className="mt-4 text-center">
                  <a
                    href={selectedCert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    <span className="text-sm font-medium">Open image in new tab</span>
                  </a>
                </div>
              </div>

              {/* Certificate details */}
              <div className="px-6 pb-6">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white text-visible">{selectedCert.title}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-slate-300 text-sm mb-1">Issuing Organization</p>
                    <p className="text-blue-300 font-medium text-visible">{selectedCert.organization}</p>
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm mb-1">Issue Date</p>
                    <p className="text-white font-medium text-visible">{selectedCert.issueDate}</p>
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm mb-1">Credential ID</p>
                    <p className="text-slate-300 font-mono text-sm text-visible">{selectedCert.credentialId}</p>
                  </div>
                  {selectedCert.verificationUrl && (
                    <div>
                      <a
                        href={selectedCert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        <span className="text-sm font-medium">Verify Certificate</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
