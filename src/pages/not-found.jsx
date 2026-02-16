import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <main className="max-w-5xl h-screen mx-auto flex flex-col gap-4 items-center justify-center">
        <div className=" flex ">
          <div className=" text-6xl font-extrabold tracking-wider text-slate-200 border-r px-5 border-slate-700">
            404
          </div>
          <div className="px-5 text-xl flex items-center text-gray-400 font-semibold">
            Page Not Found
          </div>
        </div>
        <Link to="/" className="underline underline-offset-4 text-slate-200">
          Back to Home
        </Link>
      </main>
    </>
  );
};

export default NotFound;
