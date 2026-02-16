import Desk from "./desk.jsx";
import Mobile from "./mobile.jsx";

const Index = () => {
  return (
    <div className="flex sticky">
      <aside className="lg:w-2xs hidden lg:block sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto scrollbar-ghost px-6">
        <Desk />
      </aside>
      <aside className="lg:hidden block">
        <Mobile />
      </aside>
    </div>
  );
};

export default Index;
