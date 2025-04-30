import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#122620] text-[#F4EBD0] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm Omkar Salunkhe
            </h1>
            <p className="text-xl mb-6">
              I’m a passionate software developer with expertise in building responsive web applications. I enjoy turning complex problems into simple, beautiful, and intuitive designs. Let's work together to create something amazing!
            </p>
            <div className="space-x-4">
              <Link
                href="/projects"
                className="bg-[#B68D40] text-[#F4EBD0] px-6 py-2 rounded-lg font-medium hover:bg-[#D6AD60] transition-colors duration-200"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="border-2 border-[#B68D40] text-[#F4EBD0] px-6 py-2 rounded-lg font-medium hover:bg-[#B68D40] transition-colors duration-200"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="py-20 bg-[#F4EBD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#122620]">About Me</h2>
              <p className="text-[#122620] mb-4">
                I'm a Computer Science student and passionate Software Developer with experience in Java, JavaFX, MERN Stack, and SQL. I enjoy building modern web applications and desktop software using cutting-edge technologies.
              </p>
              <p className="text-[#122620] mb-6">
                Currently pursuing my MCA, I focus on advanced development, cloud technologies, and algorithms, while interning as a Java Developer at TechnoNexis.
              </p>
              <Link
                href="/about"
                className="text-[#B68D40] font-medium hover:text-[#D6AD60] transition-colors duration-200"
              >
                Learn more about me →
              </Link>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#122620]">Featured Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                {['JavaFX','Java', 'React', 'SQL','MongoDB', 'Git'].map((skill) => (
                  <div
                    key={skill}
                    className="border-2 border-[#D6AD60] text-[#122620] px-4 py-2 rounded-lg font-medium text-center hover:bg-[#D6AD60] hover:text-[#F4EBD0] transition-colors duration-200 cursor-pointer">                    {skill}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/skills"
                  className="text-[#B68D40] font-medium hover:text-[#D6AD60] transition-colors duration-200"
                >
                  View all skills →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 