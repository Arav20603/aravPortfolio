import { images } from "../constants/images";
import { links } from "../constants/links";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-10 md:pt-24 pb-32">
        <div className="flex flex-col-reverse md:flex-row items-center gap-16">

          {/* LEFT */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 text-sm font-medium">
              Hello, I’m
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Aravind <span className="text-blue-500">Dakshan</span>{" "}
              <span className="text-blue-400">D</span>
            </h1>

            <h2 className="text-lg sm:text-xl text-gray-300">
              Final Year{" "}
              <span className="text-blue-400 font-semibold">
                Computer Science Engineer
              </span>
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto md:mx-0">
              I’m a{" "}
              <span className="text-blue-400 font-semibold">
                Full Stack Developer
              </span>{" "}
              working with MERN & React Native, with a strong interest in{" "}
              <span className="text-blue-400 font-semibold">
                Cybersecurity
              </span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a
                href={links.CV}
                target="_blank"
                className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-lg shadow-blue-600/30"
              >
                View Resume
              </a>

              <a
                href="#contact"
                className="px-7 py-3 rounded-xl border border-blue-600 hover:bg-blue-600/10 transition font-semibold"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-blue-600/20 blur-3xl" />

            <img
              src={images.profPic2}
              alt="Aravind Dakshan"
              className="relative w-64 sm:w-72 md:w-80 rounded-3xl
                         border border-blue-700/40
                         shadow-xl shadow-blue-900/40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
