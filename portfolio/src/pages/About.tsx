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

          <div
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto
                       w-48 h-10 bg-blue-600/20 blur-2xl rounded-full"
          />

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            A quick snapshot of who I am, what I build, and what drives me.
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
              , a{" "}
              <span className="text-blue-400 font-semibold">
                Computer Science Engineering Graduate
              </span>{" "}
              from{" "}
              <span className="text-blue-300 font-semibold">
                Gopalan College of Engineering & Management
              </span>
              .
            </p>

            <p>
              I specialize in{" "}
              <span className="text-blue-400 font-semibold">
                Full-Stack Development
              </span>{" "}
              and{" "}
              <span className="text-blue-400 font-semibold">
                Mobile Application Development
              </span>
              , building scalable applications using the{" "}
              <span className="text-blue-400 font-semibold">
                MERN Stack
              </span>{" "}
              and{" "}
              <span className="text-blue-400 font-semibold">
                React Native
              </span>
              .
            </p>

            <p>
              My interests include software engineering, backend systems,
              REST API development, real-time applications, and creating
              intuitive user experiences that solve real-world problems.
            </p>

            <p>
              I also possess foundational knowledge of networking and
              cybersecurity concepts, helping me develop applications with
              reliability and best practices in mind.
            </p>

            <p className="italic text-gray-400">
              Passionate about building impactful products, learning new
              technologies, and continuously improving as an engineer.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Full Stack Development",
                desc: "Building scalable web applications using MERN Stack technologies",
              },
              {
                title: "Mobile Development",
                desc: "Creating cross-platform mobile apps with React Native",
              },
              {
                title: "Software Engineering",
                desc: "Designing clean, efficient, and maintainable software solutions",
              },
              {
                title: "Problem Solving",
                desc: "Strong foundation in DSA, OOP, and logical thinking",
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

        {/* FOOTER */}
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