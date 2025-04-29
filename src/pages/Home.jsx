import { Download, ChevronRight } from 'lucide-react';
import CV from '/src/assets/Lewis_Momanyi_Nyakaru_Resume.pdf';

export default function HomePage() {
  // Function to handle CV download
  const handleDownloadCV = () => {
    // You can add analytics or other tracking here if needed
    console.log('CV download initiated');
  };

  return (
    <div className="min-h-[85vh] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
      {/* Left column: Photo/Avatar */}
      <div className="w-full md:w-2/5 flex justify-center md:justify-end">
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-lg shadow-blue-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-90"></div>
          <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">LN</div>
        </div>
      </div>
      
      {/* Right column: Info */}
      <div className="w-full md:w-3/5 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="block">Hello, I'm</span>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Lewis Nyakaru
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 mb-6">Frontend Developer & Mathematics Enthusiast</h2>
        <p className="text-gray-400 mb-6 max-w-lg">
          I specialize in building modern web applications using React, Tailwind CSS, and other cutting-edge technologies.
          Currently pursuing my BSc in Mathematics and Computer Science at Kenyatta University.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <a 
          href={CV} 
          download="Lewis_Momanyi_Nyakaru_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/30"
        >
          <Download size={18} />
          Download CV
        </a>
          <a 
            href="/projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('[data-page="projects"]')?.click();
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 border border-gray-700"
          >
            View Projects
            <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}