import Image from 'next/image'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'JavaFX', icon: '/images/skills/java-brands.png' },
        { name: 'React', icon: '/images/skills/react-brands.png' },
        { name: 'JavaScript', icon: '/images/skills/js-brands.png' },
        { name: 'HTML', icon: '/images/skills/html5-brands.png' },
        { name: 'CSS', icon: '/images/skills/css3-brands.png' },
        { name: 'Bootstrap', icon: '/images/skills/bootstrap-brands.png' },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Java', icon: '/images/skills/java-brands.png' },
        { name: 'Node.js', icon: '/images/skills/node-brands.png' },
        { name: 'Express.js', icon: '/images/skills/express-js-brands.png' },
        { name: 'MongoDB', icon: '/images/skills/database-solid.png' },
        { name: 'SQL', icon: '/images/skills/database-solid.png' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: '/images/skills/git-alt-brands.png' },
        { name: 'Docker', icon: '/images/skills/docker-brands.png' },
        { name: 'Red Hat Linux', icon: '/images/skills/redhat-brands.png' },
        { name: 'Shell Scripting', icon: '/images/skills/shell.png' },
      ],
    },
  ]

  return (
    <div className="min-h-screen py-12 bg-[#F4EBD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#122620] mb-4">My Skills</h1>
          <p className="text-xl text-[#122620]">
            Here's an overview of my technical skills and expertise
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#122620] rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-[#F4EBD0] mb-6">
                {category.title}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group flex flex-col items-center bg-[#122620] p-4 rounded-lg border border-[#1e3a2f] hover:bg-[#1e3a2f] hover:border-[#264d3b] transition-colors duration-200">

                    <div className="relative w-12 h-12 mb-2 transition-transform duration-200 group-hover:scale-110">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <span className="text-[#F4EBD0] text-sm font-medium text-center transition-all duration-200 group-hover:font-bold">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 