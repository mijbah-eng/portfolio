import About from "./components/About";
import Contant from "./components/Contant";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navber from "./components/Navber";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="max-w-[1080px] m-auto px-5 py-2">
      <Navber />
      <Hero />
      <About />
      <Skills />
      <Contant />
      <Footer />
    </div>
  );
}

export default App;
