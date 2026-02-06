import { images } from "../constants/images";
import { icons } from "../constants/icons";
import { links } from "../constants/links";

const Footer = () => {
  return (
    <footer className="mt-24 bg-black/80 backdrop-blur-xl border-t border-blue-900 text-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* BRAND */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img
                src={images.logo}
                alt="Logo"
                className="w-14 rounded-xl"
              />
              <h2 className="text-2xl font-bold text-blue-200">
                Aravind Dakshan D
              </h2>
            </div>

            <p className="text-sm text-blue-300 leading-relaxed max-w-sm">
              Final Year CSE Student passionate about building clean,
              scalable, and user-friendly web and mobile applications.
            </p>

            <div className="text-sm text-blue-400 space-y-1">
              <p>📍 Whitefield, Bangalore</p>
              <p>📧 dakshandaravind@gmail.com</p>
              <p>📞 8088276220</p>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-blue-300 mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-blue-400 transition">
                  Achievements
                </a>
              </li>
            </ul>
          </div>

          {/* SOCIALS */}
          <div>
            <h3 className="text-lg font-semibold text-blue-300 mb-6">
              Connect With Me
            </h3>

            <div className="flex gap-6">
              <a href={links.gitHub} target="_blank">
                <img
                  src={icons.gitHub}
                  alt="GitHub"
                  className="w-10 hover:scale-110 transition"
                />
              </a>
              <a href={links.linkedIn} target="_blank">
                <img
                  src={icons.linkedIn}
                  alt="LinkedIn"
                  className="w-9 hover:scale-110 transition"
                />
              </a>
              <a href={links.X} target="_blank">
                <img
                  src={icons.x}
                  alt="X"
                  className="w-9 hover:scale-110 transition"
                />
              </a>
            </div>

            <p className="text-xs text-blue-400 mt-6 max-w-xs">
              Feel free to reach out for collaboration, internships, or
              exciting opportunities.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-blue-900 my-10" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-blue-400">
          <p>
            © {new Date().getFullYear()} Aravind Dakshan D. All rights reserved.
          </p>

          <p className="opacity-70">
            Built to showcase my interests.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
