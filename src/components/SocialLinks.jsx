import React from "react";
import Instagram from "../assets/Pictures/Instagram.png";
import Github from "../assets/Pictures/Github-icons.svg";
import LinkedIn from "../assets/Pictures/linkdin.jpg";
import Facebook from "../assets/Pictures/Facebook.jpg";
import Leetcode from "../assets/Pictures/Leetcode.webp";

const SocialLinks = () => {
  const images = [
    { src: Instagram, alt: "Instagram", href: "https://www.instagram.com/muhammadanas0723/" },
    { src: Github, alt: "Github", href:"https://github.com/anas0723"},
    { src: LinkedIn, alt: "LinkedIn", href: "https://www.linkedin.com/in/anas0723/" },
    { src: Facebook, alt: "Facebook", href: "https://www.facebook.com/anas0723" },
    { src: Leetcode, alt: "Leetcode" , href: "https://leetcode.com/u/anas0723/" },
  ];
  return (
    <>
      <div className="flex justify-center mt-13">
        <h1 className="text-xl sm:text-3xl px-6 py-3 rounded-lg border-2 border-[#64ffda] shadow-lg hover:shadow-[#64ffda] transition-all duration-300  ">
          Social Links
        </h1>
      </div>
      <div className="flex justify-around mt-10 flex-wrap gap-2">
        {images.map((image, index) => (
          <div key={index} className="group relative rounded  p-4">
            <a href={image.href} target="_blank" rel="noopener noreferrer">
              <img
                src={image.src}
                alt={image.alt}
                className="w-24 h-24 object-cover rounded transition-transform duration-300 transform group-hover:scale-105"
              />
            </a>
          </div>
        ))}
      </div>
      <div className="flex gap-9  mt-10 justify-around flex-wrap">
        <div>
          <a
            href="mailto:anassoomro23@gmail.com"
            target="_blank"
            aria-label="Email"
            className="relative z-10 my-2 flex items-center justify-between rounded-full bg-gradient-to-r from-[#089f7c] font-bold  to-[#06b6d4] p-3 py-3 px-6 shadow-xl hover:bg-gradient-to-l"
          >
            anassoomro23@gmail.com
          </a>
        </div>
        <div>
          <a
            href=""
            className="relative z-10 my-2 flex items-center justify-between rounded-full bg-gradient-to-r from-[#089f7c] font-bold  to-[#06b6d4] p-3 py-3 px-6 shadow-xl hover:bg-gradient-to-l"
          >
            Rusme
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialLinks;
