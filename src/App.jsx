import Layout from "./pages/docs/layout";
import { Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/docs/index";
import LandingPage from "./pages/landing-page";
import Contactme from "./pages/contact-me";
import AboutMe from "./pages/about-me";
import CheatSheet from "./pages/cheat-sheet";
import MainLayout from "./main-layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/contact-me" element={<Contactme />}></Route>
        <Route path="/about-me" element={<AboutMe />}></Route>
        <Route path="/cheat-sheet" element={<CheatSheet />}></Route>
      </Route>
      <Route path="/docs" element={<Layout />}>
        <Route index element={<Navigate to="/docs/quickstart" />} />
        <Route path=":topicSlug" element={<Index />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
