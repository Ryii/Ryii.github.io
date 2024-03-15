import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <div id="about" className={styles.about}>
      <section className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img
              src={getImageUrl("about/web_pfp3.JPG")}
              alt="Me sitting with a laptop"
              className={styles.aboutImage}
            />
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.infoText}>
              Hey! I'm a third year Computer Science student at the University
              of Waterloo. I love learning{" "}
              <span style={{ color: "yellow" }}>new technologies</span> and
              writing
              <span style={{ color: "lightgreen" }}> efficient code</span>. From
              building responsive sites and developing optimized APIs to
              creating LLMs and CNNs, I'm passionate about everything fullstack
              and AI. <br></br> <br></br>
              Outside of programming, I like soccer, travelling the world, and
              competing in math and music competitions at the{" "}
              <span style={{ fontWeight: "bold" }}>national level</span>. I also
              enjoy rock climbing and talking to new people, so feel free to
              connect with me and say hi!
            </p>
            {/* <ul className={styles.aboutItems}>
              <li className={styles.aboutItem}>
                <img
                  src={getImageUrl("about/cursorIcon.png")}
                  alt="Cursor icon"
                />
                <div className={styles.aboutItemText}>
                  <h3>Frontend Developer</h3>
                  <p>
                    I'm a frontend developer with experience in building
                    responsive and optimized sites
                  </p>
                </div>
              </li>
              <li className={styles.aboutItem}>
                <img
                  src={getImageUrl("about/serverIcon.png")}
                  alt="Server icon"
                />
                <div className={styles.aboutItemText}>
                  <h3>Backend Developer</h3>
                  <p>
                    I have experience developing fast and optimised back-end
                    systems and APIs
                  </p>
                </div>
              </li>
              <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
                <div className={styles.aboutItemText}>
                  <h3>UI Designer</h3>
                  <p>
                    I have designed multiple landing pages and have created
                    design systems as well
                  </p>
                </div>
              </li>
            </ul> */}
          </div>
        </div>
      </section>
    </div>
  );
};
