import { useState, useEffect } from 'react';

const Portfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const skills = [
    { name: 'React', level: 70 },
    { name: 'Java', level: 45 },
    { name: 'Next.js', level: 50 },
    { name: 'TypeScript', level: 75 },
    { name: 'Kubernetes', level: 30 },
    { name: 'Node.js', level: 60 },
  ];

  const projects = [
    {
      title: 'AerodynaMND',
      description: 'Advanced aerodynamics analysis platform with real-time data visualization and complex fluid dynamics calculations',
      status: 'Active',
      link: 'https://aerodynamnd.com',
      technologies: ['React', 'Next.js', 'TypeScript', 'WebGL'],
      featured: true
    },
    {
      title: 'Java Microservices',
      description: 'Exploring microservices architecture with Spring Boot, containerization, and service mesh patterns',
      status: 'Learning',
      technologies: ['Java', 'Spring Boot', 'Docker', 'Kubernetes']
    },
    {
      title: 'Portfolio Site',
      description: 'Clean and minimal portfolio website with modern animations and responsive design',
      status: 'Complete',
      technologies: ['React', 'Tailwind CSS']
    }
  ];

  const currentActivities = [
    { text: 'Building', link: 'Eunoia', href: 'https://eunoia-proj.vercel.app/' },
    { text: 'Learning', link: 'Next.js & Kubernetes' },
    { text: 'Working with', link: 'React & Java daily' }
  ];

  const timeInPhilippines = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Manila',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }).format(currentTime);

  const isWorkingHours = () => {
    const hour = new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila', hour12: false }).split(',')[1].trim().split(':')[0];
    return parseInt(hour) >= 9 && parseInt(hour) <= 18;
  };

  return (
    <div className={`min-h-screen bg-white transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-4xl mx-auto p-6 lg:p-8 font-mono text-sm leading-relaxed">

        {/* Header Section */}
        <div className={`mb-16 transform transition-all duration-700 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-2 h-2 rounded-full ${isWorkingHours() ? 'bg-black animate-pulse' : 'bg-gray-400'}`}></div>
            <span className="text-sm text-gray-600">
              {isWorkingHours() ? 'Available for work' : 'Probably sleeping'}
            </span>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {timeInPhilippines}, PH
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight py-5">
              JohnMark Dinglasan
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-10">
              <p className="text-xl text-gray-600">Full-Stack Developer</p>
              <div className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded border w-fit">
                Lipa Batangas, Philippines
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="mailto:johndinglasan12@gmail.com"
                className="px-4 py-2 bg-white border border-gray-300 rounded hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                Get in touch
              </a>
              <a
                href="/path/to/your-cv.pdf"
                download="JohnMark Dinglasan - CV.pdf"
                className="px-4 py-2 bg-white border border-gray-300 rounded hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                CV
              </a>

              <a
                href="https://github.com/Jayem09"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-300 rounded hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className={`mb-12 grid grid-cols-2 md:grid-cols-4 gap-4 transform transition-all duration-700 delay-250 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-gray-50 p-4 rounded border">
            <div className="text-2xl font-bold text-gray-800">3+</div>
            <div className="text-sm text-gray-600">Years Coding</div>
          </div>
          <div className="bg-gray-50 p-4 rounded border">
            <div className="text-2xl font-bold text-gray-800">10+</div>
            <div className="text-sm text-gray-600">Projects</div>
          </div>
          <div className="bg-gray-50 p-4 rounded border">
            <div className="text-2xl font-bold text-gray-800">5</div>
            <div className="text-sm text-gray-600">Main Stacks</div>
          </div>
          <div className="bg-gray-50 p-4 rounded border">
            <div className="text-2xl font-bold text-gray-800">12hrs/day</div>
            <div className="text-sm text-gray-600">Learning</div>
          </div>
        </div>

        {/* About Section */}
        <div className={`mb-12 bg-gray-50 p-6 rounded border transform transition-all duration-700 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-xl font-bold mb-4">About</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I'm a developer who enjoys building web applications and learning new technologies.
            Currently focused on creating scalable solutions with modern tools and exploring
            the intersection of frontend and backend development.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-white rounded border">Problem Solver</span>
            <span className="text-xs px-2 py-1 bg-white rounded border">Fast Learner</span>
            <span className="text-xs px-2 py-1 bg-white rounded border">Coffee Enthusiast</span>
          </div>
        </div>

        {/* Currently Section */}
        <div className={`mb-12 bg-white p-6 rounded border transform transition-all duration-700 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-xl font-bold mb-4">Currently</h2>
          <div className="space-y-3">
            {currentActivities.map((activity, index) => (
              <div key={index} className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors">
                <div className="w-1 h-4 bg-gray-300 rounded"></div>
                <span className="text-gray-700">
                  {activity.text}{' '}
                  {activity.href ? (
                    <a
                      href={activity.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-gray-900 hover:underline"
                    >
                      {activity.link} ↗
                    </a>
                  ) : (
                    <span className="font-medium text-gray-900">{activity.link}</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className={`mb-12 bg-white p-6 rounded border transform transition-all duration-700 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded h-2 overflow-hidden">
                  <div
                    className="h-full bg-gray-800 rounded transition-all duration-1000 ease-out"
                    style={{
                      width: isLoaded ? `${skill.level}%` : '0%',
                      transitionDelay: `${600 + index * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className={`mb-12 transform transition-all duration-700 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-xl font-bold mb-6">Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`p-6 bg-white border rounded hover:border-gray-300 transition-all duration-200 ${project.featured ? 'border-gray-400 bg-gray-50' : ''
                  }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg text-gray-900">
                      {project.title}
                    </h3>
                    {project.featured && <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">Featured</span>}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded border">
                      {project.status}
                    </span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        ↗
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Connect Section */}
        <div className={`mb-12 bg-gray-50 p-6 rounded border transform transition-all duration-700 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-xl font-bold mb-4">Connect</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:johndinglasan12@gmail.com"
                className="px-4 py-2 bg-white border rounded hover:border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Email
              </a>
              <a
                href="https://github.com/Jayem09"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white border rounded hover:border-gray-300 hover:bg-gray-50 transition-colors"
              >
                GitHub
              </a>
            </div>
            <div className="text-sm text-gray-600 bg-white p-4 rounded border border-dashed">
              I may be slow to respond, but I always reply eventually!
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`border-t pt-8 text-center transform transition-all duration-700 delay-800 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-xs text-gray-400">
            JohnMark Dinglasan @ 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;