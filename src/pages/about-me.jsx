import about from "@/assets/about.png";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="bg-slate-950 text-white">
      <div className="pb-16 pt-32 lg:pt-15 px-4 md:px-10 lg:px-24 container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-500/10 text-xs tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            Passionate Developer
          </div>

          <h1 className="title-font font-extrabold">
            Hi, I'm <br />
            <span className="title-gradient ">Mahi Gajjar</span>
          </h1>

          <p className="mt-8 mb-12 text-md md:text-xl text-slate-300 max-w-xl">
            I'm a passionate developer with a love for creating innovative
            solutions. With a strong background in web development, I specialize
            in building responsive and user-friendly applications. I thrive on
            challenges and am always eager to learn new technologies to enhance
            my skills. Let's connect and create something amazing together!
          </p>

          <Link className="button-gradient inline-block" to="/">
            View My Work
          </Link>
        </div>

        <img src={about} />
      </div>
    </div>
  );
};

export default AboutMe;
