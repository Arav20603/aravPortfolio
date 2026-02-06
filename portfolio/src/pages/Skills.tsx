const skills = {
  "Programming": [
    "Java",
    "Python",
    "C / C++",
    "Data Structures & Algorithms",
  ],
  "Web Development": [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
  ],
  "Mobile Development": [
    "React Native",
  ],
  "Cybersecurity": [
  "Networking & System Basics",
    "Linux Environment & CLI",
    "TCP/IP, Subnetting, Ports & Protocols",
    "Vulnerability Awareness",
    "Cybersecurity Research & Analysis",
    "Basic Recon & Scanning (Nmap)",
],
  "Tools & Practices": [
    "Git & GitHub",
    "REST APIs",
    "Postman",
    "VS Code",
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative bg-gradient-to-b from-black via-blue-950/40 to-black
                 text-white py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="relative text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-400 relative z-10">
            Skills
          </h2>

          {/* Accent Glow */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto
                          w-40 h-10 bg-blue-600/20 blur-2xl rounded-full" />

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Technologies and concepts I’ve worked with and continue to improve.
          </p>
        </div>

        {/* SKILL CATEGORIES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-3xl border border-blue-800/40
                         bg-blue-900/10 p-6 sm:p-8
                         hover:bg-blue-900/20 transition
                         hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-5">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm
                               bg-black/60 border border-blue-700/40
                               text-gray-300
                               hover:text-blue-400 hover:border-blue-400
                               transition cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER LINE */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-lg">
            Focused on strong fundamentals, clean code, and continuous learning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
