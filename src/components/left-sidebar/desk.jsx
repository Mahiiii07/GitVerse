import { groups } from "@/data/data";
import { useParams } from "react-router-dom";
import Listing from "./listing";

const Desk = () => {
  const { topicSlug } = useParams();
  const allTopics = groups?.flatMap((group) => group.topics);
  const activeTopic = allTopics?.find((topic) => topic.slug === topicSlug);
  return <Listing groups={groups} activeTopic={activeTopic} />;
};

export default Desk;
