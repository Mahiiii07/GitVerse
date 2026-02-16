import React from "react";

const Glow = () => {
  return (
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
  );
};

export default Glow;
