import Collapsible from "@/assets/collapsible.jsx";
import { useState } from "react";
import LeftSidebarListing from "./left-sidebar-listing.jsx";
import LeftSidebarDesk from "./left-sidebar-desk.jsx";
import LeftSidebarMobile from "./left-sidebar-mobile.jsx";

const Leftsidebar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="flex sticky">
      <aside className="lg:w-2xs hidden lg:block sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto scrollbar-ghost px-6">
        <LeftSidebarDesk />
      </aside>
      <aside className="lg:hidden block">
        <LeftSidebarMobile />
      </aside>
    </div>
  );
};

export default Leftsidebar;
