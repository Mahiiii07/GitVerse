import SearchIcon from "@/assets/search";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { groups } from "@/data/data";

const Search = ({ handleButtonClick, setShowSearch }) => {
  const [search, setSearch] = useState("");
  const allItems = groups.flatMap((group) => {
    return group.topics.flatMap((topic) => [
      {
        name: topic.name,
        slug: `${topic.slug}#${topic.subtopics?.[0]?.slug || ""}`,
      },
      ...(topic?.subtopics).map((subtopic) => ({
        name: subtopic.title,
        slug: `${topic.slug}#${subtopic.slug}`,
      })),
    ]);
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setShowSearch(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("hashchange", handleKeyDown);
  }, []);

  function getFilteredItems() {
    return allItems?.filter((item) =>
      item.name.toLowerCase().includes(search.trim().toLowerCase()),
    );
  }

  function handleSearchClick({ item }) {
    window.location.href = `/docs/${item.slug}`;
    handleButtonClick();
  }

  return createPortal(
    <div
      className="w-full h-full bg-gray-950/50 fixed backdrop-blur-sm top-0 left-0 z-50 flex items-center justify-center"
      onClick={handleButtonClick}
    >
      <div
        className="lg:w-2xl w-full mx-4 h-72 md:px-2 py-2 gap-8 rounded-lg  bg-gray-800 back text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex text-sm lg:text-base h-8 px-3 py-6 gap-2 items-center border-b border-gray-700">
          <SearchIcon className={"text-gray-400 h-8 w-8 mt-0.5 "} />
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search in docs"
            name="Search"
            className="focus:outline-none w-full"
            autoFocus
          />
          <button
            className="bg-slate-950/70 px-3 py-1 rounded-lg cursor-pointer"
            onClick={handleButtonClick}
          >
            Esc
          </button>
        </div>
        <div className="h-box overflow-y-auto scrollbar-ghost p-2 space-y-1">
          {search.trim() !== "" ? (
            <>
              {getFilteredItems().map((item, i) => (
                <div
                  key={i}
                  className="px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-700"
                  onClick={() => {
                    handleSearchClick({ item });
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="h-full flex items-center justify-center text-sm lg:text-base">
              <p className=" text-gray-500 ">Type to search in documentation</p>
            </div>
          )}
          {getFilteredItems().length === 0 && (
            <div className="h-full flex items-center justify-center">
              <p className=" text-gray-500 ">No results found</p>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Search;
