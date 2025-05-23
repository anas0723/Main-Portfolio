import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="
     px-[30px] min-h-screen flex items-center justify-center">

      <div className="bg-[#112240]  p-10 w-full max-w-3xl">
      <div className="flex justify-center mt-13">
      
        <h2 className="text-3xl  font-bold p-4 mb-6 text-centermd:text-6xl sm:text-3xl font-mono hover:border-2  flex  items-center justify-center   text-[#64ffda]  mono  rounded-lg border-2  transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-[#64ffda] ">Contact Me</h2>
        </div>
        <form action="https://formspree.io/f/{your_form_id}" method="POST" className="space-y-6">
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

          <div className="text-center">
            <button
              type="submit"
              className="text-xl sm:text-3xl px-6 py-3 rounded-lg border-2 border-[#64ffda] shadow-lg hover:shadow-[#64ffda] transition-all duration-300 "
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
