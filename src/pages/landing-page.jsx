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

      <div className="pt-28 pb-56 ">
        <div className=" max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
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
              collaboration — through a clean, guided, developer‑first
              experience.
            </p>

            <button
              className=" mt-12 px-10 py-5 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-indigo-500/60 hover:cursor-pointer hover:-translate-y-1 hover:scale-105 transition-all duration-300  active:scale-95 "
              onClick={() => navigate("/docs")}
            >
              Start Learning
            </button>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl shadow-blue shadow-blue-500  bg-slate-900/80 backdrop-blur border border-slate-800 p-8 ">
              <div className="space-y-4 ">
                <div className="flex w-64 items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-blue-500" />
                  <div className="h-2  skeleton rounded" />
                </div>
                <div className="flex w-80 items-center gap-3 ml-6">
                  <span className="w-3 h-3 rounded-full bg-cyan-400" />
                  <div className="h-2  skeleton rounded" />
                </div>
                <div className="flex w-72 items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-blue-500" />
                  <div className="h-2  skeleton rounded" />
                </div>
                <div className="flex w-48 items-center gap-3 ml-10">
                  <span className="w-3 h-3 rounded-full bg-purple-400" />
                  <div className="h-2 skeleton rounded" />
                </div>
              </div>

              <p className="mt-6 text-sm text-slate-400">
                Visualize branches, commits & merges — before running commands
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
