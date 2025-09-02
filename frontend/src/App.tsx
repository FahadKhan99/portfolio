import Navbar from "./components/Navbar";
import HeroSection from "./components/sections/HeroSection";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <HeroSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
