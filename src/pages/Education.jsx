import { GraduationCap, Briefcase, Award, Code } from 'lucide-react';
import { ExternalLink } from 'lucide-react';

export default function EducationPage() {
  const education = [
    {
      institution: "Kenyatta University",
      degree: "BSc in Mathematics and Computer Science",
      period: "August 2021 - December 2025",
      location: "Nairobi, Kenya",
      description: "Currently pursuing a Bachelor's degree with focus on advanced mathematics and modern computer science principles."
    }
  ];
  
  const experience = [
    {
      company: "Dukatech",
      position: "Frontend Developer",
      period: "May 2024 - August 2024",
      location: "Nairobi, Kenya",
      description: "Designed and implemented the frontend for the Soma App, an innovative e-learning platform. Developed the mobile version using Flutter and the web version using React.",
      achievements: ["Built responsive UI components", "Implemented user authentication", "Created interactive learning interfaces"]
    }
  ];
  
  const awards = [
    {
      title: "IBM Data Science Practitioner Certificate",
      issuer: "IBM",
      date: "August 2023",
      description: "Earned the IBM Data Science Practitioner Certificate, demonstrating proficiency in data analysis, visualization, machine learning, and Python programming, along with hands-on experience using real-world datasets and tools like Pandas, NumPy, and Jupyter Notebooks.",
      link: "https://www.credly.com/badges/018324a2-d808-455d-9452-6c58cc0c9d76"
    },
    {
      title: "IVE DESIGN CHALLENGE",
      issuer: "Innovation Education Kenyatta University",
      date: "March 7th 2025",
      description: "Developed an Information Management System (IMS) for Kenyatta University's Design Studio, Cezeri Lab, and MedTech Lab. An offline-first platform designed to streamline lab operations through role-based access control, real-time inventory tracking, and cross-lab resource sharing.",
      link: "#"
    }
  ];
  
  const skills = [
    { category: "Frontend", items: ["React", "HTML", "CSS", "Tailwind CSS", "Vite", "Flutter"] },
    { category: "Backend", items: ["Node.js", "Express", "Django", "Flask"] },
    { category: "Databases", items: ["MongoDB", "SQL", "MySQL", "PostgreSQL"] },
    { category: "Tools", items: ["Git", "Docker", "VS Code", "Data Analysis"] },
  ];

  return (
    <div className="py-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Education & Experience</h2>
      <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">
        My academic journey, professional experience, and skills that shape my work.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Education & Experience */}
        <div className="lg:col-span-2 space-y-8">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-400" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                  <h4 className="text-xl font-semibold text-blue-300">{edu.degree}</h4>
                  <div className="text-gray-300 font-medium mt-1">{edu.institution}</div>
                  <div className="text-gray-400 text-sm mt-1 flex items-center justify-between">
                    <span>{edu.period}</span>
                    <span>{edu.location}</span>
                  </div>
                  <p className="text-gray-400 mt-3">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Work Experience Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-blue-400" />
              Work Experience
            </h3>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                  <h4 className="text-xl font-semibold text-blue-300">{exp.position}</h4>
                  <div className="text-gray-300 font-medium mt-1">{exp.company}</div>
                  <div className="text-gray-400 text-sm mt-1 flex items-center justify-between">
                    <span>{exp.period}</span>
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-gray-400 mt-3">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Awards Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-blue-400" />
              Awards & Certifications
            </h3>
            
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                  <h4 className="text-xl font-semibold text-blue-300">{award.title}</h4>
                  <div className="text-gray-300 font-medium mt-1">{award.issuer}</div>
                  <div className="text-gray-400 text-sm mt-1">{award.date}</div>
                  <p className="text-gray-400 mt-3">{award.description}</p>
                  {award.link && (
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 mt-2 text-sm"
                    >
                      View Certificate
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Column - Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-400" />
            Skills
          </h3>
          
          <div className="space-y-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                <h4 className="text-lg font-semibold text-blue-300 mb-3">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-700/70 rounded-full text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}