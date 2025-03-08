import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: 'Search-Engine',
      description: 'A powerful search engine implementation with advanced algorithms and modern UI.',
      image: '/images/projects/1.png',
      technologies: ['Java', 'Spring Boot', 'MySQL Database', 'JavaScript', 'HTML5', 'CSS3', 'Git'],
      liveUrl: 'https://github.com/omkarsalunkheatp1211/Search-Engine.git',
      githubUrl: 'https://github.com/omkarsalunkheatp1211/Search-Engine.git',
    },
    {
      title: 'Personal Finance Manager',
      description: 'A comprehensive web application for managing personal finances, tracking expenses, income, and investments.',
      image: '/images/projects/2.png',
      technologies: ['React', 'Material-UI (MUI)', 'Axios for API calls', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      liveUrl: 'https://github.com/omkarsalunkheatp1211/Personal-Financial-Manager.git',
      githubUrl: 'https://github.com/omkarsalunkheatp1211/Personal-Financial-Manager.git',
    },
    {
      title: 'File/Filder Encryption and Decryption Tool',
      description: 'AES encryption for securing files and folders, Decryption functionality with password protection, GUI-based file selection and notification',
      image: '/images/projects/3.png',
      technologies: ['Java', 'AES Encryption', 'Java Swing (GUI)', 'Secure Hash Algorithm (SHA-256)'],
      liveUrl: 'https://github.com/omkarsalunkheatp1211/File-Folder-Encryption-Decryption.git ',
      githubUrl: 'https://github.com/omkarsalunkheatp1211/File-Folder-Encryption-Decryption.git',
    },
    {
      title: 'System Monitoring Scripts',
      description: 'This repository contains two bash scripts for monitoring system resources on a Linux system.',
      image: '/images/projects/4.png',
      technologies: ['Bash Scripting', 'Linux', 'Postfix'],
      liveUrl: 'https://github.com/omkarsalunkheatp1211/System_Monitoring_Shell_Scripts.git',
      githubUrl: 'https://github.com/omkarsalunkheatp1211/System_Monitoring_Shell_Scripts.git',
    },
    {
      title: 'User Management Scripts',
      description: 'This repository contains two bash scripts for user management on a Linux system, The script automates the process of creating user accounts on a Linux system.',
      image: '/images/projects/5.png',
      technologies: ['Bash Scripting', 'Linux', 'Postfix','OpenSSL'],
      liveUrl: 'https://github.com/omkarsalunkheatp1211/User_Management_Shell_Scripts.git',
      githubUrl: 'https://github.com/omkarsalunkheatp1211/User_Management_Shell_Scripts.git',
    },
  ]

  return (
    <div className="min-h-screen py-12 bg-[#F4EBD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#122620] mb-4">My Projects</h1>
          <p className="text-xl text-[#122620]">
            Here are some of the projects I've worked on
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#122620] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#F4EBD0] mb-2">
                  {project.title}
                </h3>
                <p className="text-[#F4EBD0] mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#B68D40] text-[#F4EBD0] text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D6AD60] hover:text-[#B68D40] font-medium flex items-center"
                  >
                    Live Demo
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D6AD60] hover:text-[#B68D40] font-medium flex items-center"
                  >
                    GitHub
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 