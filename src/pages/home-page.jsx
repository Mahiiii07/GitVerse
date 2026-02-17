import gitLab from "@/assets/gitlab.png";
import Feature from "@/components/feature";
import Glow from "@/components/glow";
import features from "@/data/features.js";
import { Link } from "react-router-dom";

const GitVerseLanding = () => {
  return (
    <div className=" bg-slate-950  text-white ">
      <div className=" pt-30 pb-17 px-4 md:px-10 lg:px-24 container mx-auto  grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10  text-xs tracking-wide mb-6">
            <img src={gitLab} alt="gitlab" className="h-6" />
            Built for modern developers
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold ">
            Understand Git.
            <br />
            <span className="title-gradient">Not just commands.</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-xl">
            GitVerse helps you *see* how Git works - branching, merging, and
            many more - through a clean, guided, developer‑first experience.
          </p>
          <Link className="inline-block mt-14 button-gradient" to="/docs">
            Start Learning
          </Link>
        </div>

        <Glow />
      </div>

      <div className="p-16 px-4 md:px-10 lg:px-24 container mx-auto bg-slate-950/80">
        <div className="text-center mb-20">
          <h2 className="title-gradient title-font p-3">Key Features</h2>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
            Discover how GitVerse transforms complex Git concepts into intuitive
            visualizations and guided workflows.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-lg:has-[&>*:nth-child(odd):last-child]:[&>*:last-child]:col-span-2">
          {features.map((feat, i) => (
            <Feature feature={feat} key={i} />
          ))}
        </div>
      </div>

      <div className="p-10 md:p-20 lg:p-24 md:mx-16 lg:mx-20 flex flex-col items-center justify-center bg-linear-to-r from-blue-900/35 via-blue-600/60 to-blue-900/35 text-center transition-all duration-500 ">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 ">
          Ready to Master Git?
        </h2>
        <p className="text-md md:text-lg text-slate-200 mb-12 max-w-2xl mx-auto">
          Jump into GitVerse and explore branching, merging, and collaboration
          visually — all before touching the terminal.
        </p>
        <Link to="/docs" className="button-gradient">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default GitVerseLanding;
