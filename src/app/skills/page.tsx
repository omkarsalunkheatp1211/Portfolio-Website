import Image from 'next/image'

export default function Skills() {
  const skillCategories: {
    title: string;
    skills: { name: string; icon: string; hoverIcon: string }[];
  }[] = [
      {
        title: 'Frontend Development',
        skills: [
          { name: 'JavaFX', icon: '/images/skills/java-brands.png', hoverIcon: '/images/skills/java-brands2.png' },
          { name: 'React', icon: '/images/skills/react-brands.png', hoverIcon: '/images/skills/react-brands2.png' },
          { name: 'JavaScript', icon: '/images/skills/js-brands.png', hoverIcon: '/images/skills/js-brands2.png' },
          { name: 'HTML', icon: '/images/skills/html5-brands.png', hoverIcon: '/images/skills/html5-brands2.png' },
          { name: 'CSS', icon: '/images/skills/css3-brands.png', hoverIcon: '/images/skills/css3-brands2.png' },
          { name: 'Bootstrap', icon: '/images/skills/bootstrap-brands.png', hoverIcon: '/images/skills/bootstrap-brands2.png' },
        ],
      },
      {
        title: 'Backend Development',
        skills: [
          { name: 'Java', icon: '/images/skills/java-brands.png', hoverIcon: '/images/skills/java-brands2.png' },
          { name: 'Node.js', icon: '/images/skills/node-brands.png', hoverIcon: '/images/skills/node-brands2.png' },
          { name: 'Express.js', icon: '/images/skills/express-js-brands.png', hoverIcon: '/images/skills/express-js-brands2.png' },
          { name: 'MongoDB', icon: '/images/skills/database-solid.png', hoverIcon: '/images/skills/database-solid2.png' },
          { name: 'SQL', icon: '/images/skills/database-solid.png', hoverIcon: '/images/skills/database-solid2.png' },
        ],
      },
      {
        title: 'Tools & Technologies',
        skills: [
          { name: 'Git', icon: '/images/skills/git-alt-brands.png', hoverIcon: '/images/skills/git-alt-brands2.png' },
          { name: 'Docker', icon: '/images/skills/docker-brands.png', hoverIcon: '/images/skills/docker-brands2.png' },
          { name: 'Red Hat Linux', icon: '/images/skills/redhat-brands.png', hoverIcon: '/images/skills/redhat-brands2.png' },
          { name: 'Shell Scripting', icon: '/images/skills/shell.png', hoverIcon: '/images/skills/shell2.png' },
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
                    className="group flex flex-col items-center bg-[#122620] p-4 rounded-lg border border-[#1e3a2f] hover:bg-[#1e3a2f] hover:border-[#264d3b] transition-colors duration-200 cursor-pointer"
                  >
                    <div className="relative w-12 h-12 mb-2 transition-transform duration-200 group-hover:scale-110">
                      {/* Default Image */}
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className="object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                      />
                      {/* Hover Image */}
                      <Image
                        src={skill.hoverIcon}
                        alt={skill.name}
                        fill
                        className="object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      />
                    </div>
                    <span className="text-[#F4EBD0] text-sm font-medium text-center transition-all duration-200 group-hover:text-[#D6AD60] group-hover:font-bold">
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
