import { Copy } from "lucide-react";
import React, { useEffect, useRef } from "react";

const Main = ({ activeTopic, setActiveSubTopic }) => {
  const divRefs = useRef([]);
  const observerRef = useRef(null);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length === 0) return;

        // Pick the section closest to top
        const topMostEntry = visibleEntries.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
        )[0];

        const index = topMostEntry.target.dataset.id;
        setActiveSubTopic(activeTopic.subtopics[index].slug);
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.1,
      }
    );

    observerRef.current = observer;

    divRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeTopic, setActiveSubTopic]);

  return (
    <main className="max-w-5xl xl:max-w-3xl w-full px-4 pt-10 pb-24 md:px-16 lg:px-24 xl:pr-0 mt-16">
      <header>
        <div className="text-xs tracking-widest font-semibold uppercase text-gray-400 mb-2">
          {activeTopic?.name}
        </div>
      </header>

      {activeTopic?.subtopics?.map((subtopic, index) => (
        <div
          key={index}
          id={subtopic.slug}
          className="mb-12 scroll-mt-24"
          ref={(element) => (divRefs.current[index] = element)}
          data-id={index}
        >
          <h2 className="text-3xl font-bold text-blue-500 mb-2">
            {subtopic.title}
          </h2>
          <p className="text-slate-300 mb-6 leading-relaxed">
            {subtopic.description}
          </p>

          {subtopic.example && (
            <div className="bg-slate-800 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-medium text-slate-50 mb-2">
                Example
              </h3>
              <p className="text-slate-300">{subtopic.example}</p>
            </div>
          )}

          {subtopic.code && subtopic.code.length > 0 && (
            <div className="bg-slate-900 rounded-lg p-4">
              <div className="flex justify-between">
                <h3 className="text-lg font-medium text-slate-50 mb-2">Code</h3>
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(subtopic.code.join("\n"))
                  }
                  className="hover:cursor-pointer  "
                >
                  <Copy height="18" width="18" />
                </button>
              </div>
              <pre className="text-slate-300 whitespace-pre-line font-mono text-sm overflow-x-auto">
                {subtopic.code.join("\n")}
              </pre>
            </div>
          )}
        </div>
      ))}
    </main>
  );
};

export default Main;
