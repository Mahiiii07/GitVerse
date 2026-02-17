import { groups } from "@/data/data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Right_sidebar from "../../components/right-sidebar";
import Main from "./main";

const Index = () => {
  const { topicSlug } = useParams();
  const allTopics = groups.flatMap((group) => group.topics);
  const activeTopic = allTopics.find((topic) => topic.slug === topicSlug);
  const subtopics = activeTopic ? activeTopic?.subtopics : [];
  const [activeSubTopic, setActiveSubTopic] = useState("");
  const currentHash = window.location.hash.slice(1);
  const isValidSubtopic =
    !currentHash || subtopics.some((sub) => sub.slug === currentHash);

  useEffect(() => {
    if (subtopics && subtopics.length > 0) {
      const hash = window.location.hash.slice(1);
      const matchingSubtopic = subtopics.find(
        (subtopic) => subtopic.slug === hash,
      );
      setActiveSubTopic(matchingSubtopic ? hash : subtopics[0].slug);
    }
  }, [topicSlug, subtopics]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      const matchingSubtopic = subtopics?.find(
        (subtopic) => subtopic.slug === hash,
      );
      if (matchingSubtopic) {
        setActiveSubTopic(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [subtopics]);

  useEffect(() => {
    if (activeSubTopic) {
      window.location.hash = activeSubTopic;
      const element = document.getElementById(activeSubTopic);
      if (element) {
        element.scrollIntoView({ behavior: "instant" });
      }
    }
  }, [activeSubTopic]);

  if (!activeTopic || !isValidSubtopic) {
    return (
      <main className="max-w-5xl h-screen mx-auto flex items-center justify-center">
        <div className=" flex ">
          <div className=" text-6xl font-extrabold tracking-wider text-slate-200 border-r px-5 border-slate-700">
            404
          </div>
          <div className="px-5 text-xl flex items-center text-gray-400 font-semibold">
            Page Not Found
          </div>
        </div>
      </main>
    );
  }

  return (
    <div className="flex-1 gap-12 lg:flex">
      <Main activeTopic={activeTopic} setActiveSubTopic={setActiveSubTopic} />
      <Right_sidebar
        subtopics={subtopics}
        activeSubTopic={activeSubTopic}
        setActiveSubTopic={setActiveSubTopic}
      />
    </div>
  );
};

export default Index;
