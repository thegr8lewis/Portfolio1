import { Mail, Phone, ExternalLink } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">About Me</h2>
      <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">
        Learn more about who I am, my journey, and what I'm passionate about.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left column: Photo/Image */}
        <div className="flex justify-center">
          <div className="w-64 h-64 relative">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/30 to-purple-600/30 backdrop-blur-sm flex items-center justify-center">
              <div className="text-6xl font-bold text-white/70">LM</div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-32 h-32 rounded-lg bg-blue-500/20 backdrop-blur-sm"></div>
            <div className="absolute -top-2 -left-2 w-24 h-24 rounded-lg bg-purple-500/20 backdrop-blur-sm"></div>
          </div>
        </div>
        
        {/* Right column: Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-blue-300">Lewis Momanyi Nyakaru</h3>
          <p className="text-gray-300 mb-4">Frontend Developer & Mathematics Enthusiast</p>
          
          <div className="space-y-4 text-gray-400">
            <p>
              I'm a frontend developer with a strong foundation in mathematics and computer science, 
              currently pursuing my degree at Kenyatta University. My passion lies in creating intuitive, 
              efficient, and visually appealing web applications.
            </p>
            <p>
              With experience in both web and mobile development using technologies like React, Flutter, 
              and Tailwind CSS, I enjoy solving complex problems and turning ideas into functional applications.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, enhancing my data science skills, 
              or working on innovative projects that combine my mathematical background with modern 
              development practices.
            </p>
          </div>
          
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-300 mb-3">Contact Information</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:lewis.nyakaru@gmail.com" className="hover:text-blue-400 transition-colors">
                  lewis.nyakaru@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+254797053213" className="hover:text-blue-400 transition-colors">
                  +254 797053213
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <ExternalLink className="w-4 h-4 text-blue-400" />
                <a 
                  href="https://portfolio-zeta-dun-62.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Current Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional About Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
          <h3 className="text-xl font-bold mb-4 text-blue-300">My Approach</h3>
          <p className="text-gray-400">
            I believe in writing clean, maintainable code and creating user-centered designs. 
            My approach combines technical excellence with a focus on solving real-world problems. 
            I'm committed to continuous learning and staying updated with the latest industry trends 
            and best practices.
          </p>
        </div>
        
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
          <h3 className="text-xl font-bold mb-4 text-blue-300">Future Goals</h3>
          <p className="text-gray-400">
            I aim to further explore the intersection of mathematics, data science, and web development. 
            My goal is to create innovative solutions that leverage data analytics and visualization 
            while providing exceptional user experiences. I'm particularly interested in educational 
            technology and tools that make learning more accessible and engaging.
          </p>
        </div>
      </div>
    </div>
  );
}