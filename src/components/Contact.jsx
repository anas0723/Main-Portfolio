import React, { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Replace YOUR_ACCESS_KEY_HERE with your actual Web3Forms access key
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="px-[30px] min-h-screen flex items-center justify-center">
      <div className="bg-[#112240] p-10 w-full max-w-3xl">
        <div className="flex justify-center mt-13">
          <h2 className="text-3xl font-bold p-4 mb-6 text-centermd:text-6xl sm:text-3xl font-mono hover:border-2 flex items-center justify-center text-[#64ffda] mono rounded-lg border-2 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-[#64ffda]">
            Contact Me
          </h2>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-[#64ffda] bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#64ffda] placeholder-gray-300"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-[#64ffda] bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#64ffda] placeholder-gray-300"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-300">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-[#64ffda] bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#64ffda] placeholder-gray-300"
              placeholder="Your message..."
            ></textarea>
          </div>

          <div className="text-center flex flex-col gap-4">
            <button
              type="submit"
              className="text-xl sm:text-3xl px-6 py-3 rounded-lg border-2 border-[#64ffda] shadow-lg hover:shadow-[#64ffda] transition-all duration-300"
            >
              Send Message
            </button>
            {result && (
              <span className={`text-center ${result.includes("success") ? "text-green-400" : "text-red-400"}`}>
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
