import About from "./components/About";
import Contant from "./components/Contant";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navber from "./components/Navber";
import Projects from "./components/Projects";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="max-w-[1080px] m-auto px-5 py-2">
      <ScrollToTopButton />
      <Navber />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contant />
      <Footer />
    </div>
  );
}

export default App;
