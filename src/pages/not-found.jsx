import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl h-screen mx-auto flex items-center justify-center">
        <div className=" flex ">
          <div className=" text-6xl font-extrabold tracking-wider text-slate-200 border-r px-5 border-slate-700">
            404
          </div>
          <div className="px-5 text-xl flex items-center text-gray-400 font-semibold">
            Page Not Found
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
