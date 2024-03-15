import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { ParticlesComponent } from "./components/Particles/Particles";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <div>
          <ParticlesComponent />
        </div>
        <Navbar />
        <Hero />
      </div>

      <About />
      {/* <Experience /> */}
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
