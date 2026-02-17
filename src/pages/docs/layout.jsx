import Index from "@/components/left-sidebar/index";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-slate-100">
      <Navbar />
      <div className="lg:flex flex-1">
        <Index />
        <div className="hidden lg:block lg:w-10  border-r border-gray-800" />
        <div className="flex-1 flex-col">
          <Outlet />
          <Footer />
        </div>
        <div className="hidden lg:block lg:w-10  border-l border-gray-800 " />
      </div>
    </div>
  );
}
