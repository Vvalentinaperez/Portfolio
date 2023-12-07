import React from "react";
import GitHubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white"
      id="contact"
    >
      <div className="container p-12 flex flex-col md:flex-row justify-between">
        <div className="socials flex flex-row gap-2 mb-4 md:mb-0">
          <Link href="https://github.com/Vvalentinaperez/">
            <Image src={GitHubIcon} alt="github" width={30} height={30} />
          </Link>
          <Link href="https://www.linkedin.com/in/valentina-perez-077611214/">
            <Image src={LinkedinIcon} alt="linkedin" width={30} height={30} />
          </Link>
        </div>
        <span className="text-[#ADB7BE] mb-4 max-w-md">
          I&lsquo;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&rsquo;ll
          try my best to get back to you!
        </span>
      </div>
    </footer>
  );
};

export default Footer;
