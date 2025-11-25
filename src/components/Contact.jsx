import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("subject", "Portfolio Contact");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(data.message || "Message sent successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className=" px-6 py-20 sm:px-10 lg:px-0"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center rounded-[28px] border border-[#64ffda]/25 bg-[#112240]/90 p-10 shadow-[0_20px_60px_-25px_rgba(100,255,218,0.45)] backdrop-blur">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#64ffda]">
            Stay In Touch
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Let's Build Something Together
          </h2>
          <p className="mt-4 max-w-xl text-sm text-gray-300 sm:text-base">
            Drop a quick note with your project idea, collaboration plan, or just to say hi. I'll reply as soon as I can.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 w-full space-y-7">
          <input
            type="hidden"
            name="access_key"
            value="10e16cba-6ce0-45a3-bd37-2a30b763e3e8"
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-2xl border border-white/10 bg-[#0a192f]/60 px-5 py-4 text-white shadow-inner shadow-black/20 transition duration-300 focus:border-[#64ffda]/80 focus:outline-none focus:ring-2 focus:ring-[#64ffda]/40 placeholder:text-gray-500"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-2xl border border-white/10 bg-[#0a192f]/60 px-5 py-4 text-white shadow-inner shadow-black/20 transition duration-300 focus:border-[#64ffda]/80 focus:outline-none focus:ring-2 focus:ring-[#64ffda]/40 placeholder:text-gray-500"
                placeholder="name@email.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400"
            >
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full rounded-2xl border border-white/10 bg-[#0a192f]/60 px-5 py-4 text-white shadow-inner shadow-black/20 transition duration-300 focus:border-[#64ffda]/80 focus:outline-none focus:ring-2 focus:ring-[#64ffda]/40 placeholder:text-gray-500"
              placeholder="Tell me about your project, timeline, or goals."
            />
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <button
              type="submit"
              className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-2xl border border-[#64ffda] bg-[#0a192f] px-10 py-4 text-lg font-semibold text-white shadow-[0_15px_45px_-25px_rgba(100,255,218,0.8)] transition-all duration-300 hover:-translate-y-1 hover:border-[#64ffda]/70 hover:shadow-[0_25px_80px_-35px_rgba(100,255,218,0.9)] sm:w-auto"
            >
              <span className="absolute inset-[1px] rounded-[18px] bg-gradient-to-r from-[#0a192f] via-[#0f2a48] to-[#112240] opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative flex items-center gap-3">
                <span className="flex h-3 w-3 items-center justify-center rounded-sm bg-[#64ffda] transition-all duration-300 group-hover:w-8 group-hover:rounded-md" />
                <span>Send Message</span>
              </span>
            </button>

            {result && (
              <span
                className={`text-center text-sm font-medium ${result.includes("success") ? "text-[#64ffda]" : "text-red-400"}`}
              >
                {result}
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
