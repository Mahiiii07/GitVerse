import React from 'react'
import LeftSidebarListing from './left-sidebar-listing'
import { groups } from '@/data/data';
import { useParams } from 'react-router-dom';

const LeftSidebarDesk = () => {
    const { topicSlug } = useParams();
    const allTopics = groups.flatMap((group) => group.topics);
    const activeTopic = allTopics.find((topic) => topic.slug === topicSlug);
  return (
    <LeftSidebarListing groups = {groups} activeTopic={activeTopic}/>
  )
}

export default LeftSidebarDesk