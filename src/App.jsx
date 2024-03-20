import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { ParticlesComponent } from "./components/Particles/Particles";
import { ProjectGrid } from "./components/ProjectGrid/ProjectGrid";

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
      {/* <Projects /> */}
      <ProjectGrid />
      <Contact />
    </div>
  );
}

export default App;
