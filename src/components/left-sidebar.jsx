import React from "react";
import { groups } from "../data/data.js";
import { useParams, useNavigate } from "react-router-dom";

const Leftsidebar = () => {
  const { topicSlug } = useParams();
  const navigate = useNavigate();

  const allTopics = groups.flatMap((group) => group.topics);
  const activeTopic = allTopics.find((topic) => topic.slug === topicSlug);

  const goToTopic = (topic) => {
    navigate(`/docs/${topic.slug}`);
  };

  return (
    <aside className="lg:w-2xs hidden lg:block sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto scrollbar-ghost px-6">
      <ul className="space-y-10 my-7">
        {groups.map((group, groupIndex) => (
          <li key={groupIndex}>
            <div className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-4">
              {group.name}
            </div>
            <ul className="space-y-1 border-l border-gray-800">
              {group.topics.map((topic, topicIndex) => (
                <li key={topicIndex}>
                  {/* <button
                    onClick={() => goToTopic(topic)}
                    className={`px-4 py-0.5 text-base text-left w-full hover:cursor-pointer transition-all ${
                      activeTopic?.name === topic.name
                        ? "font-bold border-l -ml-px border-blue-500 text-blue-500"
                        : "text-slate-300 hover:text-white border-l -ml-px pl-4 border-slate-800 hover:border-slate-500"
                    }`}
                  >
                    {topic.name}
                  </button> */}
                  <button
                    className=" py-0.5 text-base text-left w-full "
                    onClick={() => goToTopic(topic)
                    }
                  >
                    <a
                     
                      className={
                        activeTopic?.name === topic.name
                          ? "font-semibold border-l pl-4 -ml-px border-blue-500 text-blue-500 hover:cursor-pointer"
                          : "text-slate-300 hover:text-white hover:border-slate-500 border-l pl-4 -ml-px border-slate-800 hover:cursor-pointer"
                      }
                    >
                      {topic.name}
                    </a>
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Leftsidebar;
