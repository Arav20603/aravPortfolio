import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !email || !text) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/manjbwnl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, text }),
      });

      if (response.ok) {
        toast.success(
          "Message sent successfully! 🚀 I’ll get back to you soon."
        );
        setName("");
        setEmail("");
        setText("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-black via-blue-950/40 to-black
                 text-white py-32 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="relative text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-400 relative z-10">
            Contact Me
          </h2>

          <div
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto
                       w-48 h-10 bg-blue-600/20 blur-2xl rounded-full"
          />

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Have a question, opportunity, or just want to connect?
            Feel free to drop a message.
          </p>
        </div>

        {/* FORM CARD */}
        <div
          className="max-w-2xl mx-auto rounded-3xl border border-blue-800/40
                     bg-blue-900/10 p-8 sm:p-10
                     hover:bg-blue-900/20 transition"
        >
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl bg-black/60 border border-blue-700/40
                           px-4 py-3 text-gray-200 placeholder-gray-500
                           focus:outline-none focus:border-blue-400 transition"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl bg-black/60 border border-blue-700/40
                           px-4 py-3 text-gray-200 placeholder-gray-500
                           focus:outline-none focus:border-blue-400 transition"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Write your message here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full rounded-xl bg-black/60 border border-blue-700/40
                           px-4 py-3 text-gray-200 placeholder-gray-500
                           focus:outline-none focus:border-blue-400 transition resize-none"
              />
            </div>

            {/* SUBMIT */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="px-10 py-3 rounded-xl font-semibold
                           bg-blue-600 hover:bg-blue-700
                           transition shadow-lg shadow-blue-600/30"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* FOOTER LINE */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-lg">
            Looking forward to connecting with you.
          </p>
        </div>

        {/* TOAST */}
        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          theme="dark"
          transition={Bounce}
        />
      </div>
    </section>
  );
};

export default ContactForm;
