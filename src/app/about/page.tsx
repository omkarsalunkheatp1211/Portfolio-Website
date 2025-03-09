import Image from 'next/image'

export default function About() {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      school: 'Dr. DY Patil University Ambi | Pune. ',
      period: '2023 - Present',
      description: 'Focusing on advanced software development, cloud computing, and distributed systems.',
      courses: [
        'Advanced Software Engineering',
        'Cloud Computing and Virtualization',
        'Distributed Systems',
        'Advanced Database Management',
      ],
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      school: 'IMRDA, Sangli, under Bharati Vidyapeeth University, Pune.',
      period: '2020 - 2023',
      description: 'Graduated with honors, focusing on software engineering fundamentals and web development.',
      courses: [
        'Data Structures and Algorithms',
        'Web Development',
        'Operating Systems',
        'Database Systems',
      ],
    },
  ]

  return (
    <div className="min-h-screen py-12 bg-[#F4EBD0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#122620] mb-4">About Me</h1>
          <p className="text-xl text-[#122620]">
            Get to know more about my background and what drives me
          </p>
        </div>

        {/* Profile Section */}
        <div className="bg-[#122620] rounded-lg shadow-md p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-48 h-48 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-[#B68D40]">
              <Image
                src="/images/profile-placeholder.png"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#F4EBD0] mb-4">About Me...</h2>
              <p className="text-[#F4EBD0] mb-4">
              I am a final-year MCA student with a strong passion for computer science and technology. While I am a fresher, I have developed a solid foundation in programming, database management, and software development throughout my studies. I am proficient in MERN stack, Java, Git, Ansible, and Linux.
              </p>
              <p className="text-[#F4EBD0]">
              Driven by a continuous desire to expand my knowledge, I am eager to contribute to the tech world and make a positive impact. I enjoy solving programming challenges on platforms like Leetcode and collaborating with peers on innovative projects.
              </p>
              
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#122620] mb-6">Education</h2>
          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className="bg-[#122620] rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-[#F4EBD0]">{item.degree}</h3>
                <p className="text-[#D6AD60] mt-1">{item.school}</p>
                <p className="text-[#B68D40] text-sm mt-1">{item.period}</p>
                <p className="text-[#F4EBD0] mt-4">{item.description}</p>
                <div className="mt-4">
                  <h4 className="text-[#D6AD60] font-medium mb-2">Key Courses:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {item.courses.map((course, i) => (
                      <li key={i} className="text-[#F4EBD0] flex items-start">
                        <span className="text-[#B68D40] mr-2">•</span>
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 