import { useState } from "react";
import { useParams } from "react-router-dom";
import Collapsible from "../assets/collapsible";
import { groups } from "../data/data";
import LeftSidebarListing from "./left-sidebar-listing";

const LeftSidebarMobile = () => {
  const { topicSlug } = useParams();
  const allTopics = groups.flatMap((group) => group.topics);
  const activeTopic = allTopics.find((topic) => topic.slug === topicSlug);
  const activeGroup = groups.find((group) =>
    group.topics.find((topic) => topic.slug === topicSlug),
  );

  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="w-full fixed flex">
      <div className="bg-slate-950 w-full top-14 p-2 fixed h-10 border-b  border-gray-800 flex  gap-3">
        <button
          className={`text-gray-200 hover:text-blue-500 cursor-pointer  ${isOpen ? "" : "rotate-180 "} `}
          onClick={toggleMenu}
        >
          <Collapsible width={18} />
        </button>
        <div className="text-gray-400 text-xs tracking-widest font-semibold p-1">
          {activeGroup?.name} &gt; {activeTopic?.name}
        </div>
      </div>
      {isOpen && (
        <div className="pt-20 h-dvh w-full overflow-y-auto scrollbar-ghost px-6 bg-slate-950">
          <LeftSidebarListing
            setIsOpen={setIsOpen}
            groups={groups}
            activeTopic={activeTopic}
          />
        </div>
      )}
    </div>
  );
};

export default LeftSidebarMobile;
