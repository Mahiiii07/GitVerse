import React from "react";
import Navbar from "@/components/navbar";
import gitLab from "../assets/gitLab.png";
import Footer from "@/components/footer";
import { useNavigate } from "react-router-dom";
import Snowfall from "react-snowfall";

export default function GitVerseLanding() {
  const navigate = useNavigate();
  return (
    <div className=" bg-slate-950  text-white -ml-3">
      {/* <Snowfall
        style={{
         position: 'fixed',
         width: '100vw',
         height: '100vh',
         
        }}  speed={[1,1]}  radius={[0.1, 2]}
      /> */}
      <Navbar />

      <div className="pt-28 pb-32 px-10 max-w-7xl mx-auto  grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center  gap-2 px-4 py-1.5 rounded-full bg-blue-500/10  text-xs tracking-wide mb-6">
            <img src={gitLab} alt="" className="h-6" />
            Built for modern developers
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold ">
            Understand Git.
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
              Not just commands.
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-xl">
            GitVerse helps you *see* how Git works — branching, merging, and
            collaboration — through a clean, guided, developer‑first experience.
          </p>

          <button
            className=" mt-12 px-10 py-5  bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-indigo-500/60 hover:cursor-pointer hover:-translate-y-1 hover:scale-105 transition-all duration-300  active:scale-95 "
            onClick={() => navigate("/docs")}
          >
            Start Learning
          </button>
        </div>

        <div className=" rounded-3xl  shadow-blue shadow-blue-500  bg-slate-900/80  border border-slate-800 p-8">
          <div className="space-y-4 ">
            <div className="flex sm:w-64 w-42 items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              <div className="h-2 skeleton rounded" />
            </div>
            <div className="flex sm:w-80 w-52 items-center gap-3 ml-6">
              <span className="w-3 h-3 rounded-full bg-cyan-400" />
              <div className="h-2  skeleton rounded" />
            </div>
            <div className="flex sm:w-72 w-48 items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              <div className="h-2  skeleton rounded" />
            </div>
            <div className="flex sm:w-48 w-28 items-center gap-3 ml-8">
              <span className="w-3 h-3 rounded-full bg-purple-400" />
              <div className="h-2 skeleton rounded" />
            </div>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            Visualize branches, commits & merges — before running commands
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-10 pb-32 bg-slate-950/80">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold bg-linear-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent">
            Key Features
          </h2>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
            Discover how GitVerse transforms complex Git concepts into intuitive
            visualizations and guided workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* Feature 1 */}
          <div className="group relative p-8  rounded-3xl bg-slate-900/80  border border-slate-800 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2">
            <div className="absolute -inset-2 bg-linear-to-r from-blue-500/20 to-cyan-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-linear-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Smooth Topic Navigation</h3>
              <p className="text-slate-300 mb-6">
                Navigate effortlessly between topics with active section highlighting
  and smooth scrolling that keeps track of where you are.
              </p>
              <span className="text-blue-400 font-semibold text-sm tracking-wide hover:text-blue-300 cursor-default">
                 Smart scrolling 
              </span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2">
            <div className="absolute -inset-2 bg-linear-to-r from-cyan-400/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-linear-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Structured Git Learning</h3>
              <p className="text-slate-300 mb-6">
                Learn Git and GitHub through well-organized groups, topics, and subtopics.
  Each concept is explained step by step for a smooth learning experience.
              </p>
              <span className="text-cyan-400 font-semibold text-sm tracking-wide hover:text-cyan-300 cursor-default">
                 Concept-based modules 
              </span>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
            <div className="absolute -inset-2 bg-linear-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-linear-to-r from-purple-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Clean Developer UI</h3>
              <p className="text-slate-300 mb-6">
                A modern, responsive interface built with React and Tailwind CSS,
  designed to stay fast, readable, and distraction-free.
              </p>
              <span className="text-purple-400 font-semibold text-sm tracking-wide hover:text-purple-300 cursor-default">
               Modern experience
              </span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
