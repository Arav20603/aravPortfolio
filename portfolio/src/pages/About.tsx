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
            A quick snapshot of who I am, what I build, and what excites me.
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
              </span>.
            </p>

            <p>
              I build{" "}
              <span className="text-blue-400 font-semibold">
                clean, scalable applications
              </span>{" "}
              using the{" "}
              <span className="text-blue-400 font-semibold">
                MERN stack
              </span>{" "}
              and{" "}
              <span className="text-blue-400 font-semibold">
                React Native
              </span>.
            </p>

            <p>
              I’m actively exploring{" "}
              <span className="text-blue-400 font-semibold">
                Cybersecurity
              </span>{" "}
              to understand vulnerabilities, networks, and secure system design.
            </p>

            <p className="italic text-gray-400">
              I enjoy solving problems and continuously improving my craft.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "💻 Full Stack",
                desc: "End-to-end web apps with MongoDB, Express, React & Node.js",
              },
              {
                title: "📱 Mobile Apps",
                desc: "Cross-platform mobile apps using React Native",
              },
              {
                title: "🛡️ Cybersecurity",
                desc: "Learning networks, attacks, and secure development",
              },
              {
                title: "🧠 Problem Solving",
                desc: "Strong DSA & logical thinking using Java",
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
            Always learning. Always building. Always improving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
