const About = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-black via-blue-950/40 to-black
                 text-white py-10 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="relative text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-400 relative z-10">
            About Me
          </h2>

          {/* Accent Glow */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto
                          w-48 h-10 bg-blue-600/20 blur-2xl rounded-full" />

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            A quick snapshot of who I am, what I secure, and what excites me.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* LEFT */}
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Hi, I’m{" "}
              <span className="text-blue-400 font-semibold">
                Aravind Dakshan D
              </span>
              , a final-year{" "}
              <span className="text-blue-400 font-semibold">
                Computer Science Engineering
              </span>{" "}
              student at{" "}
              <span className="text-blue-300 font-semibold">
                Gopalan College of Engineering & Management
              </span>{" "}
              and a{" "}
              <span className="text-blue-400 font-semibold">
                Cybersecurity Intern at The CyberDiplomat
              </span>.
            </p>

            <p>
              I work at the intersection of{" "}
              <span className="text-blue-400 font-semibold">
                secure systems
              </span>{" "}
              and application development using the{" "}
              <span className="text-blue-400 font-semibold">
                MERN stack
              </span>{" "}
              and{" "}
              <span className="text-blue-400 font-semibold">
                React Native
              </span>.
            </p>

            <p>
              I’m focused on{" "}
              <span className="text-blue-400 font-semibold">
                Cybersecurity
              </span>{""}
              , understanding vulnerabilities, networks, and defensive design.
            </p>

            <p className="italic text-gray-400">
              I enjoy problem-solving and strengthening systems from the inside out.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Cybersecurity",
                desc: "Foundations of security, networks, and vulnerability analysis",
              },
              {
                title: "Secure Development",
                desc: "Building applications with security-first thinking",
              },
              {
                title: "Full Stack",
                desc: "Web & mobile development using MERN and React Native",
              },
              {
                title: "Problem Solving",
                desc: "Logical thinking, DSA, and Java-based problem solving",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-blue-800/40
                           bg-blue-900/10 p-6
                           hover:bg-blue-900/20 transition"
              >
                <h3 className="text-lg font-semibold text-blue-400 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER LINE */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-lg">
            Always learning. Always securing. Always improving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
