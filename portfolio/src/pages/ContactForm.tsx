import Notification from "../components/Notification";
import { Loader2 } from "lucide-react";
import {
  Mail,
  MapPin,
  Briefcase,
  User,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const [notification, setNotification] = useState({
    show: false,
    type: "success" as "success" | "error",
    message: "",
  });

  const showNotification = (
    type: "success" | "error",
    message: string
  ) => {
    setNotification({
      show: true,
      type,
      message,
    });

    setTimeout(() => {
      setNotification((prev) => ({
        ...prev,
        show: false,
      }));
    }, 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !text) {
      showNotification(
        "error",
        "Please fill in all fields before submitting."
      );
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://formspree.io/f/manjbwnl",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            text,
          }),
        }
      );

      if (response.ok) {
        showNotification(
          "success",
          "Message sent successfully. I'll get back to you soon."
        );

        setName("");
        setEmail("");
        setText("");
      } else {
        showNotification(
          "error",
          "Something went wrong. Please try again."
        );
      }
    } catch {
      showNotification(
        "error",
        "Network error. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (<section
    id="contact"
    className="relative bg-gradient-to-b from-black via-blue-950/40 to-black text-white py-32 px-6 overflow-hidden"
  >
    {/* BACKGROUND GLOW */} <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full" />

    <Notification
      show={notification.show}
      type={notification.type}
      message={notification.message}
      onClose={() =>
        setNotification((prev) => ({
          ...prev,
          show: false,
        }))
      }
    />

    <div className="max-w-6xl mx-auto">

      {/* HEADER */}
      <div className="relative text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-400 relative z-10">
          Let's Connect
        </h2>

        <div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto
                   w-48 h-10 bg-blue-600/20 blur-2xl rounded-full"
        />

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Interested in collaborating, discussing opportunities,
          or building something impactful together?
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-5 gap-8">

        {/* LEFT PANEL */}
        <div
          className="lg:col-span-2 rounded-3xl
                   border border-blue-800/40
                   bg-gradient-to-br
                   from-blue-900/20
                   to-black/40
                   backdrop-blur-xl
                   p-8"
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-4">
            Get In Touch
          </h3>

          <p className="text-gray-300 leading-relaxed mb-8">
            I'm currently open to software development opportunities,
            collaborations, freelance projects, and innovative ideas.
          </p>

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <Mail size={18} className="text-blue-400" />
              <span className="text-gray-300">
                dakshandaravind@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin size={18} className="text-blue-400" />
              <span className="text-gray-300">
                Bengaluru, India
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Briefcase size={18} className="text-blue-400" />
              <span className="text-gray-300">
                Open to Full-Time Opportunities
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedin
                size={18}
                className="text-[#0A66C2]"
              />

              <a
                href="https://linkedin.com/in/aravind-dakshan-d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-300 transition"
              >
                Connect on LinkedIn
              </a>
            </div>

          </div>
        </div>

        {/* FORM PANEL */}
        <div
          className="lg:col-span-3 rounded-3xl
                   border border-blue-800/40
                   bg-blue-900/10
                   backdrop-blur-xl
                   p-8 sm:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME */}
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-300 mb-3">
                <User size={16} />
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="
                w-full rounded-2xl
                bg-black/40
                border border-blue-800/30
                px-5 py-4
                text-gray-200
                placeholder-gray-500
                focus:outline-none
                focus:border-blue-400
                focus:ring-4
                focus:ring-blue-500/10
                transition
              "
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-300 mb-3">
                <Mail size={16} />
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                w-full rounded-2xl
                bg-black/40
                border border-blue-800/30
                px-5 py-4
                text-gray-200
                placeholder-gray-500
                focus:outline-none
                focus:border-blue-400
                focus:ring-4
                focus:ring-blue-500/10
                transition
              "
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-300 mb-3">
                <MessageSquare size={16} />
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Tell me about your project, opportunity, or idea..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="
                w-full rounded-2xl
                bg-black/40
                border border-blue-800/30
                px-5 py-4
                text-gray-200
                placeholder-gray-500
                focus:outline-none
                focus:border-blue-400
                focus:ring-4
                focus:ring-blue-500/10
                transition
                resize-none
              "
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="
                group
                w-full
                py-4
                rounded-2xl
                font-semibold
                bg-gradient-to-r
                from-blue-600
                to-blue-500
                hover:scale-[1.01]
                transition-all
                shadow-lg
                shadow-blue-600/20
                disabled:opacity-70
                disabled:cursor-not-allowed
                flex
                items-center
                justify-center
                gap-2
                hover:cursor-pointer
              "
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>Let's Connect →</>
              )}
            </button>

          </form>
        </div>

      </div>

      {/* FOOTER */}
      <div className="mt-20 text-center">
        <p className="text-gray-400 text-lg">
          Let's build something meaningful together.
        </p>
      </div>
    </div>
  </section>

  );
};

export default ContactForm;
