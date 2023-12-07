"use client";
import React, { useState } from "react";
import axios from "axios";
import GitHubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/send", formData);

      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[#38BDF8] from-blue-800 to-transparent rounded-full h-80 w-80  blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question pr just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Vvalentinaperez/">
            <Image src={GitHubIcon} alt="github" width={50} height={50} />
          </Link>
          <Link href="https://www.linkedin.com/in/valentina-perez-077611214/">
            <Image src={LinkedinIcon} alt="linkedin" width={50} height={50} />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-6" onSubmit={handleFormSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block  text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-[#18191E] border border-[#33353F] mb-2 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="jacob@google.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block  text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="bg-[#18191E] border border-[#33353F] mb-2 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="Just saying hi!"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              {" "}
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] mb-2 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="rounded-lg w-full bg-gradient-to-br from-slate-600 via-slate-300 
          to-slate-900  hover:bg-slate-800 py-2 px-5 "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
