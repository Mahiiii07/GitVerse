import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useNavigate } from "react-router-dom";
import about from "../assets/about.png";

export default function AboutMe() {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />

      <div className="pb-16 pt-16 px-4 md:px-10 lg:px-24 container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/****** Left Content ******/}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-xs tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            Passionate Developer
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
              Mahi Gajjar
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-xl">
            I'm a passionate developer with a love for creating innovative
            solutions. With a strong background in web development, I specialize
            in building responsive and user-friendly applications. I thrive on
            challenges and am always eager to learn new technologies to enhance
            my skills. Let's connect and create something amazing together!
          </p>

          <button
            className="mt-12 px-10 py-5 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-indigo-500/60 hover:-translate-y-1 hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer"
            onClick={() => navigate("/")}
          >
            View My Work
          </button>
        </div>

        <img src={about} />
      </div>

      <Footer />
    </div>
  );
}
