import React, { useEffect, useState } from "react";
import Main from "./main";
import Right_sidebar from "./right-sidebar";
import { useParams } from "react-router-dom";
import { groups } from "@/data/data";

const Topic = () => {
  const { topicSlug } = useParams();
  const allTopics = groups.flatMap((group) => group.topics);
  const activeTopic = allTopics.find((topic) => topic.slug === topicSlug);
  const subtopics = activeTopic ? activeTopic?.subtopics : [];
  const [activeSubTopic, setActiveSubTopic] = useState(window.location.hash.slice(1) || activeTopic?.subtopics?.[0].slug);

 useEffect(() => {
    setActiveSubTopic(window.location.hash.slice(1) || subtopics?.[0].slug);
  }, [activeTopic]);

  if (!activeTopic) {
    return (
      <main className="max-w-5xl h-[calc(100vh)] mx-auto flex items-center justify-center">
        <div className=" flex ">
          <div className=" text-3xl font-extrabold tracking-wider text-slate-200 border-r px-5 border-slate-700">
            404
          </div>
          <div className="px-5 text-base py-2 text-gray-400 font-semibold">            
            Page Not Found
          </div>
        </div>
      </main>
    );
  }

  return (
    <div className="flex-1 gap-12 lg:flex">
      <Main activeTopic={activeTopic} setActiveSubTopic={setActiveSubTopic}/>
      <Right_sidebar subtopics={subtopics} activeSubTopic={activeSubTopic} setActiveSubTopic={setActiveSubTopic}/>
    </div>
  );
};

export default Topic;
