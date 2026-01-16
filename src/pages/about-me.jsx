import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import likedIn from "../assets/linkedin.png";
import github from "../assets/github.png";
import twitter from "../assets/twitter.png";
import email from "../assets/email.png";
import { useNavigate } from "react-router-dom";

export default function AboutMe() {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />

      <div className="pt-28 pb-56">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/****** Left Content ******/}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-xs tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Passionate Developer
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
                Mahi Gajjar
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-xl">
              A full-stack developer passionate about creating modern web
              applications. I specialize in React, Python (Django), and
              cutting-edge technologies to build sleek, user-friendly
              experiences.
            </p>

            <button
              className="mt-12 px-10 py-5 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-indigo-500/60 hover:-translate-y-1 hover:scale-105 transition-all duration-300 active:scale-95 hover:cursor-pointer"
              onClick={() => navigate("/")}
            >
              View My Work
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
