import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import email from "../assets/email.png";
import location from "../assets/location.png";
import clock from "../assets/clock.png";
import likedIn from "../assets/linkedin.png";
import pinterest from "../assets/pinterest.png";
import github from "../assets/github.png";
import twitter from "../assets/twitter.png";
import emailjs from "@emailjs/browser";
import { Link, useNavigate } from "react-router-dom";

const Contactme = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", subject: "", message: "" });
    emailjs
      .send(
        "service_zka61xh",
        "template_9usoppu",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey: "T-bPmHsYeGMbZfKVf",
        },
      )
      .then(
        () => {
          alert("Thank you for your message! We will get back to you soon.");
          navigate("/docs");
        },
        (error) => {
          alert("Failed to send your message. Please try again.");
        },
      );
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <div className="pt-20 pb-12 px-4 lg:px-14 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-300">
              Contact Me
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have questions about GitVerse? We'd love to hear from you. Send us
              a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="bg-gray-900 border lg:w-1/2 border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6 text-blue-500">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400"
                  placeholder="Enter your full name"
                />

                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400"
                  placeholder="Enter your email address"
                />

                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400"
                  placeholder="What's this about?"
                />

                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me more about your inquiry..."
                />

                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-blue-700 to-cyan-400 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 active:scale-95 "
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8 lg:w-1/2 ">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-blue-500">
                  Get in touch
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center ">
                      <img src={email} alt="email" className="h-6 " />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-200">Email</h3>
                      <p className="text-gray-400">gajjarmahi40@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center ">
                      <img src={location} alt="location" className="h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-200">Location</h3>
                      <p className="text-gray-400">
                        Ahmedabad - 382415, Gujarat
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <img src={clock} alt="clock" className="h-6 ml-0.5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-200">
                        Response Time
                      </h3>
                      <p className="text-gray-400">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-blue-500">
                  Follow me
                </h2>
                <div className="flex space-x-4">
                  <Link
                    to="https://www.linkedin.com/in/mahi-gajjar-0801932a2/"
                    className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition duration-200"
                  >
                    <img src={likedIn} alt="linkedin" className="h-6" />
                  </Link>
                  <Link
                    to="https://x.com/MDG0708"
                    className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition duration-200"
                  >
                    <img src={twitter} alt="x" className="h-6" />
                  </Link>
                  <Link
                    to="https://in.pinterest.com/gajjarmahi40/"
                    className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition duration-200"
                  >
                    <img src={pinterest} alt="pinterest" className="h-6" />
                  </Link>
                  <Link
                    to="https://github.com/Mahiiii07"
                    className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition duration-200"
                  >
                    <img src={github} alt="github" className="h-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contactme;
