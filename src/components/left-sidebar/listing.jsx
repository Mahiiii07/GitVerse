import { useNavigate } from "react-router-dom";

const Listing = ({ setIsOpen, groups, activeTopic }) => {
  const navigate = useNavigate();

  const goToTopic = (topic) => {
    navigate(`/docs/${topic.slug}`);
    {
      setIsOpen && setIsOpen(false);
    }
  };
  return (
    <ul className="space-y-10 my-7">
      {groups?.map((group, groupIndex) => (
        <li key={groupIndex}>
          <div className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-4">
            {group.name}
          </div>
          <ul className="space-y-1 border-l border-gray-800">
            {group?.topics?.map((topic, topicIndex) => (
              <li key={topicIndex}>
                <button
                  className={`py-0.5 text-base text-left cursor-pointer w-full pl-4 -ml-px border-l ${
                    activeTopic?.name === topic.name
                      ? "font-semibold border-blue-500 text-blue-500 "
                      : "text-slate-300 hover:text-white hover:border-slate-500  border-slate-800"
                  }`}
                  onClick={() => goToTopic(topic)}
                >
                  {topic.name}
                </button>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Listing;
