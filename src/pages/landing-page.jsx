import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useNavigate } from "react-router-dom";
import gitLab from "@/assets/gitlab.png";
import Feature1 from "@/assets/feature1";
import Feature2 from "@/assets/feature2";
import Feature3 from "@/assets/feature3";

export default function GitVerseLanding() {
  const navigate = useNavigate();
  return (
    <div className=" bg-slate-950  text-white ">
      <div className="pt-28 pb-32 px-4 md:px-10 lg:px-24 container mx-auto  grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10  text-xs tracking-wide mb-6">
            <img src={gitLab} alt="gitlab" className="h-6" />
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
            GitVerse helps you *see* how Git works - branching, merging, and
            many more - through a clean, guided, developer‑first experience.
          </p>

          <button
            className="mt-12 px-10 py-5 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-indigo-500/60 cursor-pointer hover:-translate-y-1 hover:scale-105 transition-all duration-300  active:scale-95 "
            onClick={() => navigate("/docs")}
          >
            Start Learning
          </button>
        </div>

        <div className=" rounded-3xl shadow-blue shadow-blue-600  bg-slate-900/80  border border-slate-800 md:p-8 p-6">
          <div className="space-y-4 ">
            <div className="flex sm:w-64 w-42 items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              <div className="h-2 skeleton rounded" />
            </div>
            <div className="flex sm:w-80 w-48 items-center gap-3 ml-6">
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

      <div className="pb-32 px-4 md:px-10 lg:px-24 container mx-auto bg-slate-950/80">
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
          <div className="group p-8 rounded-3xl bg-slate-900/80 border border-slate-800 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:-translate-y-2 hover:border-blue-500/60 hover:bg-linear-to-r hover:from-blue-500/20 hover:to-cyan-400/20 hover:shadow-[0_20px_60px_rgba(59,130,246,0.35),0_0_25px_rgba(59,130,246,0.25)]">
            <div className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center bg-linear-to-br from-blue-500 to-cyan-400 shadow-2xl transition-transform duration-300 group-hover:scale-110">
              <Feature1 className={" text-white"} height={36} width={36} />
            </div>
            <h3 className="text-2xl font-semibold mb-3">
              Smooth Topic Navigation
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Move seamlessly across topics with smooth scrolling. Active
              sections stay highlighted so you never lose context.
            </p>
            <span className="text-sm font-medium text-blue-400 tracking-wide">
              Smart scrolling
            </span>
          </div>

          <div className="group p-8 rounded-3xl bg-slate-900/80 border border-slate-800 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:-translate-y-2 hover:border-cyan-500/50 hover:bg-linear-to-r hover:from-cyan-400/20 hover:to-purple-500/20 hover:shadow-[0_20px_60px_rgba(34,211,238,0.35),0_0_30px_rgba(168,85,247,0.25)]">
            <div className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center bg-linear-to-r from-cyan-400 to-purple-400 shadow-2xl shadow-cyan-500/30 transition-transform duration-300 group-hover:scale-110">
              <Feature2 className={" text-white"} height={34} width={34} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Structured Git Learning</h3>
            <p className="text-slate-300 mb-6">
              Learn Git and GitHub through a clear, structured flow. Topics are
              organized to make complex ideas easy to follow.
            </p>
            <span className="text-cyan-400 font-semibold text-sm tracking-wide">
              Concept-based modules
            </span>
          </div>

          <div className="group p-8 rounded-3xl bg-slate-900/80 border border-slate-800 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:-translate-y-2 hover:border-purple-500/50 hover:bg-linear-to-r hover:from-purple-500/20 hover:to-blue-500/20 hover:shadow-[0_20px_60px_rgba(168,85,247,0.35),0_0_30px_rgba(59,130,246,0.25)] md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center bg-linear-to-r from-purple-400 to-blue-500 shadow-2xl shadow-purple-500/30 transition-transform duration-300 group-hover:scale-110">
              <Feature3 className={" text-white"} height={34} width={34} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Clean Developer UI</h3>
            <p className="text-slate-300 mb-6">
              A modern, responsive interface built for developers. Designed to
              stay fast, clean, and distraction-free.
            </p>
            <span className="text-purple-400 font-semibold text-sm tracking-wide">
              Modern experience
            </span>
          </div>
        </div>
      </div>

      <div className="h-screen flex flex-col items-center justify-center   bg-linear-to-r from-blue-900/35 via-blue-600/60 to-blue-900/35 text-center transition-all duration-500 ">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 ">
          Ready to Master Git?
        </h2>
        <p className="text-lg md:text-xl text-slate-200 mb-12 max-w-2xl mx-auto">
          Jump into GitVerse and explore branching, merging, and collaboration
          visually — all before touching the terminal.
        </p>
        <button
          onClick={() => navigate("/docs")}
          className="px-14 py-5 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 active:scale-95 cursor-pointer"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
