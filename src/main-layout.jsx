import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-slate-100">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
