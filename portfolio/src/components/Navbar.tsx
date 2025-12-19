import { useEffect, useState } from "react";
import { icons } from "../constants/icons";
import { images } from "../constants/images";
import { links } from "../constants/links";

const navItems = [
  { id: "home", label: "Home", href: "#" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "achievements", label: "Achievements", href: "#achievements" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  /* 🔥 Scroll Spy */
  useEffect(() => {
    const onScroll = () => {
      navItems.forEach((item) => {
        const section =
          item.id === "home"
            ? document.body
            : document.getElementById(item.id);

        if (!section) return;

        const top = item.id === "home" ? 0 : section.offsetTop - 150;
        const height =
          item.id === "home" ? 400 : section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(item.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* 🔒 Lock scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-black/70 backdrop-blur-xl border-b border-blue-900">
        <nav className="max-w-7xl mx-auto h-20 px-5 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img
              src={images.logo}
              alt="Logo"
              className="w-14 rounded-xl"
            />
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-10 text-lg text-blue-100">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`relative transition
                    ${
                      active === item.id
                        ? "text-blue-400 after:w-full"
                        : "hover:text-blue-400 after:w-0"
                    }
                    after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                    after:bg-blue-400 after:transition-all after:duration-300
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Socials */}
          <div className="hidden md:flex gap-6">
            <a href={links.gitHub} target="_blank">
              <img src={icons.gitHub} className="w-9 hover:scale-110 transition" />
            </a>
            <a href={links.linkedIn} target="_blank">
              <img src={icons.linkedIn} className="w-8 hover:scale-110 transition" />
            </a>
          </div>

          {/* Mobile Button */}
          <button onClick={() => setOpen(true)} className="md:hidden">
            <img src={icons.menu} className="w-9" />
          </button>
        </nav>
      </header>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-40"
        />
      )}

      {/* MOBILE DRAWER */}
      <aside
        className={`fixed top-0 right-0 h-full w-[75%] max-w-xs bg-black z-50
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close */}
        <div className="flex justify-end p-5">
          <button onClick={() => setOpen(false)} className="text-3xl text-blue-300">
            ✕
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-8 px-8 mt-10 text-xl text-blue-100">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => {
                setActive(item.id);
                setOpen(false);
              }}
              className={`transition
                ${
                  active === item.id
                    ? "text-blue-400 font-semibold"
                    : "hover:text-blue-400"
                }
              `}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-10">
          <a href={links.gitHub} target="_blank">
            <img src={icons.gitHub} className="w-11 hover:scale-110 transition" />
          </a>
          <a href={links.linkedIn} target="_blank">
            <img src={icons.linkedIn} className="w-10 hover:scale-110 transition" />
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
