import AutoSlider from "../components/AutoSlider";
import { images } from "../constants/images";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative bg-gradient-to-b from-black via-blue-950/40 to-black
                 text-white py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="relative text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-400 relative z-10">
            Achievements & Activities
          </h2>

          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto
                          w-56 h-10 bg-blue-600/20 blur-2xl rounded-full" />

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            Hackathons, competitions, and knowledge-sharing experiences.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* HACKATHON */}
          <div className="rounded-3xl border border-blue-800/40 bg-blue-900/10
                          p-6 sm:p-8 hover:bg-blue-900/20 transition">
            <AutoSlider
              images={[
                images.hack1,
                images.hack2,
                images.hack3,
              ]}
            />

            <h3 className="text-xl font-semibold text-blue-400 mt-6">
              Runner-up – GCEM Hacks 2025
            </h3>

            <p className="text-sm text-blue-300 mt-1">
              24-hour National-Level Hackathon
            </p>

            <p className="text-gray-300 mt-4">
              Secured 2nd place among 20+ teams as part of <b>Team Runtime Terrors</b>.
              Built <b>FitCommunity</b>, focusing on front-end development and UI logic.
            </p>
          </div>

          {/* WORKSHOP */}
          <div className="rounded-3xl border border-blue-800/40 bg-blue-900/10
                          p-6 sm:p-8 hover:bg-blue-900/20 transition">
            <AutoSlider
              images={[
                images.workshop1,
                images.workshop2,
                images.workshop3,
                images.workshop4,
              ]}
            />

            <h3 className="text-xl font-semibold text-blue-400 mt-6">
              LinkedIn Profile Building Workshop
            </h3>

            <p className="text-sm text-blue-300 mt-1">
              GCEM CSE Club – TECHEON | Aug 2025
            </p>

            <p className="text-gray-300 mt-4">
              Conducted a session for juniors on building a strong LinkedIn profile,
              showcasing projects, networking effectively, and personal branding.
            </p>
          </div>
        </div>

        {/* FOOTER LINE */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-lg">
            Competing, sharing knowledge, and growing beyond the classroom.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
