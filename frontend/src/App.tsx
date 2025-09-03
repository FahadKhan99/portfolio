import Navbar from "./components/Navbar";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="pb-[100vh]">
        <Navbar />
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
