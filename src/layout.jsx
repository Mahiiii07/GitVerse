import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Left_sidebar from "./components/left-sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-slate-100">
      <Navbar />
      <div className="lg:flex flex-1">
        {/*******  Left sidebar *******/}
        <Left_sidebar />

        {/******* Divider after left sidebar *******/}
        <div className="hidden lg:block lg:w-10 lg:flex-none border-r border-gray-800" />

        {/******* Main content + right sidebar + Footer *******/}
        <div className="flex-1 flex-col">
        {/******* Main content + right sidebar  *******/}
          <Outlet/>
          <Footer />
        </div>
        <div className="hidden lg:block lg:w-10 lg:flex-none border-l border-gray-800 " />
      </div>
    </div>
  );
}