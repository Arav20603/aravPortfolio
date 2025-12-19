import { links } from "../constants/links";

const projects = [
  {
    title: "RideEase",
    subtitle: "Multi-modal Ride Booking Platform",
    description:
      "A smart ride booking system that allows users to plan journeys using multiple ride segments like Cab, Auto, Bike, and Metro.",
    tech: ["React Native", "Expo", "Node.js", "Express", "MongoDB"],
    links: [
      { label: "User App", url: links.rideEaseUser },
      { label: "Rider App", url: links.rideEaseRider },
      { label: "Server", url: links.rideEaseServer },
    ],
    highlight: true,
  },
  {
    title: "FitCommunity",
    subtitle: "Fitness Progress Tracker",
    description:
      "Track workouts, monitor fitness progress, and stay consistent with personalized routines.",
    tech: ["React Native", "Firebase"],
    links: [{ label: "GitHub", url: links.fitness }],
  },
  {
    title: "Referral System",
    subtitle: "MERN Stack Application",
    description:
      "Built a complete referral system with authentication, unique referral codes, and MongoDB integration.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    links: [{ label: "GitHub", url: links.referral }, { label: 'Live Demo', url: links.referralLive }],
  },
  {
    title: "Dynamic Web Page Builder",
    subtitle: "JSON-Driven Page Generator",
    description:
      "A scalable web page builder that dynamically generates pages using JSON configurations and APIs.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    links: [{ label: "GitHub", url: links.dynamic }, { label: 'Live Demo', url: links.dynamicLive }],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-b from-black via-blue-950/40 to-black
                 text-white py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="relative text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-400 relative z-10">
            Projects
          </h2>

          {/* Accent Glow */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto
                          w-44 h-10 bg-blue-600/20 blur-2xl rounded-full" />

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            A selection of projects showcasing my development skills and interests.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {projects.map((project) => (
            <div
              key={project.title}
              className={`relative rounded-3xl border
                ${project.highlight
                  ? "border-blue-500/60 shadow-blue-500/20"
                  : "border-blue-800/40"}
                bg-blue-900/10 p-8
                hover:bg-blue-900/20
                hover:-translate-y-1
                transition-all duration-300`}
            >
              {/* PROJECT TITLE */}
              <h3 className="text-2xl font-semibold text-blue-400">
                {project.title}
              </h3>

              <p className="text-sm text-blue-300 mt-1">
                {project.subtitle}
              </p>

              {/* DESCRIPTION */}
              <p className="text-gray-300 mt-4 leading-relaxed">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-3 mt-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs
                               bg-black/60 border border-blue-700/40
                               text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex flex-wrap gap-4 mt-8">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-sm font-medium
                               bg-blue-600/20 text-blue-300
                               border border-blue-600/40
                               hover:bg-blue-600 hover:text-white
                               transition"
                  >
                    🔗 {link.label}
                  </a>
                ))}
              </div>

              {/* FEATURED BADGE */}
              {project.highlight && (
                <span className="absolute top-6 right-6 text-xs px-3 py-1
                                 rounded-full bg-blue-600/20 text-blue-400">
                  Featured
                </span>
              )}
            </div>
          ))}
        </div>

        {/* FOOTER LINE */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-lg">
            More projects coming as I continue learning and building.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
