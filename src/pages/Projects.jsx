import { Github, ExternalLink, Code } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      title: "Information Management System",
      description: "A centralized software solution designed to store, organize, and retrieve data efficiently. It replaces manual record-keeping with a secure, structured database, enabling users to add, search, update, and export information seamlessly.",
      technologies: ["React", "Python (Django)", "PostgreSQL", "Docker"],
      features: [
        "Role-based access control",
        "Advanced search filters",
        "Automated reporting (PDF/Excel)",
        "Audit logs for tracking changes"
      ],
      image: "ims"
    },
    {
      title: "My Tutor",
      description: "A platform that connects students and tutors. Tutors can register their details (e.g., name, age, qualifications), while students can book tutors. Once a tutor is booked, they cannot be booked for the same period.",
      technologies: ["React", "Express", "SQL", "Docker"],
      features: [
        "Tutor registration system",
        "Booking management",
        "Scheduling conflicts prevention",
        "JWT authentication"
      ],
      image: "tutor"
    },
    {
      title: "Crypto Tracker",
      description: "A crypto platform that tracks cryptocurrencies, displaying real-time data and interactive graphs for users to monitor market trends.",
      technologies: ["Vite", "React", "Express", "MongoDB"],
      features: [
        "Real-time cryptocurrency data",
        "Interactive market trend graphs",
        "User portfolio tracking",
        "Price alerts"
      ],
      image: "crypto"
    },
    {
      title: "Soma App",
      description: "An interactive mobile application designed to help primary school students (Grades 1–7) learn through gamified quizzes. Students select a subject and topic, answer questions, and earn points for correct answers.",
      technologies: ["React", "Flutter", "Flask", "Docker"],
      features: [
        "Grade-specific educational content",
        "Gamified learning experience",
        "Real-time feedback",
        "Performance tracking",
        "Teacher admin panel"
      ],
      image: "soma"
    }
  ];

  return (
    <div className="py-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">My Projects</h2>
      <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">
        Here are some of the projects I've worked on, showcasing my skills in frontend and backend development.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10"
          >
            <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Code className="w-8 h-8 text-blue-300" />
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-300">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-700/70 rounded-full text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3 mt-4">
                <a 
                  href="#"
                  className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a 
                  href="#"
                  className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}