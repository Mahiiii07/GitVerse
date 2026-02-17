import Tick from "@/assets/tick";
import { useState } from "react";
import { Link } from "react-router-dom";
import Copy from "../assets/copy";
import RightArrow from "../assets/right-arrow";
import { data } from "../data/cheatsheet-data";

const CheatSheet = () => {
  const [copiedStates, setCopiedStates] = useState({});

  function copyCode(code, slug) {
    navigator.clipboard.writeText(code);
    setCopiedStates((prev) => ({ ...prev, [slug]: true }));
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [slug]: false }));
    }, 2000);
  }
  return (
    <div className="bg-slate-950 text-white">
      <div className="container mx-auto px-4 md:px-10 lg:px-24  pt-28 pb-24">
        <h1 className="md:text-6xl text-5xl  font-extrabold mb-4">
          Git <span className="title-gradient">Cheat Sheet</span>
        </h1>
        <p className="text-slate-400 mb-14 max-w-3xl text-lg">
          Everything you need to remember about Git — laid out like a modern
          developer tool.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 auto-rows-[320px] gap-8 grid-flow-dense">
          {data?.map((group, index) => {
            const wide =
              index === 0 ||
              index === 4 ||
              index === 8 ||
              index === 13 ||
              index === 12;
            const tall = index === 3 || index === 7;

            return (
              <div
                key={group.slug}
                className={`
                   rounded-3xl border border-slate-800 
                  bg-linear-to-br from-slate-700/40 to-slate-950  
                  p-6  transition-all duration-300 hover:scale-103  hover:shadow-blue-md shadow-blue-600
                  ${wide ? "xl:col-span-2" : ""}
                  ${tall ? "xl:row-span-2" : ""}
                `}
              >
                <div className="flex items-center justify-between mb-4">
                  <Link
                    className="text-xl font-bold tracking-wide cursor-pointer flex gap-2 items-center hover:gap-3 transition-all  duration-300"
                    to={`/docs/${group.slug}`}
                  >
                    {group.title}
                    <RightArrow />
                  </Link>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">
                    {group.commands.length}
                  </span>
                </div>

                <div
                  className={`space-y-3 overflow-y-auto scrollbar-ghost ${tall ? "lg:h-145 h-56" : "h-56"} pr-1 scrollbar-thin`}
                >
                  {group?.commands?.map((cmd) => (
                    <div
                      key={cmd.slug}
                      className="rounded-xl border border-slate-800 bg-slate-950 p-3 hover:border-blue-500/40 transition"
                    >
                      <pre className="text-blue-400 text-sm mb-1 overflow-x-auto scrollbar-ghost-1 bg-slate-900/70 rounded-lg px-3 py-2 flex justify-between">
                        {cmd.code}
                        <button
                          onClick={() => copyCode(cmd.code, cmd.slug)}
                          className="cursor-pointer pl-6"
                        >
                          {copiedStates[cmd.slug] ? (
                            <Tick height="18" width="18" />
                          ) : (
                            <Copy height="18" width="18" />
                          )}
                        </button>
                      </pre>

                      <p className="text-slate-400 text-sm ">
                        {cmd.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CheatSheet;
