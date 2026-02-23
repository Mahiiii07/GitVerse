import Desk from "./desk.jsx";
import Mobile from "./mobile.jsx";

const LeftSidebarIndex = () => {
  return (
    <div className="flex sticky">
      <aside className="lg:w-2xs hidden lg:block sticky top-14 h-sidebar overflow-y-auto scrollbar-ghost px-6">
        <Desk />
      </aside>
      <aside className="lg:hidden block">
        <Mobile />
      </aside>
    </div>
  );
};

export default LeftSidebarIndex;
