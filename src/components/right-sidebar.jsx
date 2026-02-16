import React from "react";
import { rightSidebarData } from "../data/data.js";

const Rightsidebar = ({ activeSubTopic, setActiveSubTopic, subtopics }) => {
  const handleSubTopicChange = ({ slug }) => {
    setActiveSubTopic(slug);
  };

  return (
    <aside className="hidden py-7 top-14 xl:block xl:w-2xs xl:flex-none sticky h-full overflow-y-auto scrollbar-ghost pl-3">
      <p className="uppercase text-xs tracking-widest font-semibold text-blue-500 mb-3">
        On this page
      </p>
      <ul className=" space-y-1 border-l border-gray-800">
        {subtopics?.map((subtopic, index) => (
          <li key={index}>
            <button
              className=" py-0.5 text-base text-left w-full "
              onClick={() => handleSubTopicChange({ slug: subtopic.slug })}
            >
              <a
                href={`#${subtopic.slug}`}
                className={
                  activeSubTopic === subtopic.slug
                    ? "font-semibold border-l pl-4 -ml-px border-blue-500 text-blue-500 cursor-pointer"
                    : "text-slate-300 hover:text-white hover:border-slate-500 border-l pl-4 -ml-px border-slate-800 cursor-pointer"
                }
              >
                {subtopic.title}
              </a>
            </button>
          </li>
        ))}
      </ul>

      {rightSidebarData.sections.map((section, index) => (
        <div key={index}>
          <p className="uppercase font-semibold text-xs tracking-widest mt-12 text-blue-500 mb-3">
            {section.title}
          </p>
          <ul className="space-y-2 border-l border-slate-800">
            {section.commands.map((command, commandIndex) => (
              <li
                key={commandIndex}
                className="text-slate-300 hover:text-white transition-colors border-l -ml-px px-4 border-slate-800 hover:border-slate-500"
              >
                <code className="bg-blue-950 px-1 py-0.5 rounded text-sm">
                  {command.code}
                </code>{" "}
                - {command.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Rightsidebar;
