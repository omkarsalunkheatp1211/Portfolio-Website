import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: 'Metal-ERP System',
      description: 'An ERP system designed for a car and bike exhaust manufacturing company, focusing on production and inventory management. Contributed to front-end development using JavaFX and project research.',
      image: '/images/projects/MetalERP.png',
      technologies: ['JavaFX', 'Spring Boot', 'MySQL Database', 'Git','CSS3'],
    },    
    {
      title: 'Search-Engine',
      description: 'A powerful search engine implementation with advanced algorithms and modern UI.',
      image: '/images/projects/1.png',
      technologies: ['Java', 'Spring Boot', 'MySQL Database', 'JavaScript', 'HTML5', 'CSS3', 'Git'],
    },
    {
      title: 'Personal Finance Manager',
      description: 'A comprehensive web application for managing personal finances, tracking expenses, income, and investments.',
      image: '/images/projects/2.png',
      technologies: ['React', 'Material-UI (MUI)', 'Axios for API calls', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    },
    {
      title: 'File/Filder Encryption and Decryption Tool',
      description: 'AES encryption for securing files and folders, Decryption functionality with password protection, GUI-based file selection and notification',
      image: '/images/projects/3.png',
      technologies: ['Java', 'AES Encryption', 'Java Swing (GUI)', 'Secure Hash Algorithm (SHA-256)'],
    },
    {
      title: 'System Monitoring Scripts',
      description: 'Monitoring system resources on a Linux system.',
      image: '/images/projects/4.png',
      technologies: ['Bash Scripting', 'Linux', 'Postfix'],
    },
    {
      title: 'User Management Scripts',
      description: 'User management on a Linux system, The script automates the process of creating user accounts on a Linux system.',
      image: '/images/projects/5.png',
      technologies: ['Bash Scripting', 'Linux', 'Postfix','OpenSSL'],
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
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 