import Layout from "./layout";
import { Routes, Route, Navigate } from "react-router-dom";
import Topic from "./components/topic";
import LandingPage from "./pages/landing-page";
import Contactme from "./pages/contact-me";
import AboutMe from "./pages/about-me";
import CheatSheet from "./pages/cheat-sheet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/docs" element={<Layout/>}>
        <Route index element={<Navigate to="/docs/quickstart"/>} />
        <Route path=":topicSlug" element={<Topic/>} />
      </Route>
      <Route path="/contact-me" element={<Contactme />}></Route>
      <Route path="/about-me" element={<AboutMe />}></Route>
      <Route path="/cheat-sheet" element={<CheatSheet />}></Route>
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  );
}

export default App;
