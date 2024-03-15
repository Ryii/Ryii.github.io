import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <React.Fragment>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Ryan Sun!</h1>
          <p className={styles.description}>
            {/* I'm a third year Computer Science student at the University of
            Waterloo. I'm a passionate full-stack developer with 3 years of
            experience using Python, C++, and the MERN stack. Reach out if you'd
            like to learn more! */}
            I'm a student who's passionate about software and ML.
            {/* Feel free to reach out if you'd like to chat! */}
          </p>
          {/* <a href="mailto:myemail@email.com" className={styles.contactBtn}>
            Contact Me
          </a> */}
          <ul className={styles.links}>
            <li>
              <a href="mailto:ryiijcsun@gmail.com">
                <img
                  src={getImageUrl("contact/emailIcon.png")}
                  alt="Email icon"
                  className={styles.link}
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ryan-jsun/">
                <img
                  src={getImageUrl("contact/linkedinIcon.png")}
                  alt="LinkedIn icon"
                  className={styles.link}
                />
              </a>
            </li>
            <li>
              <a href="https://www.github.com/Ryii">
                <img
                  src={getImageUrl("contact/githubIcon.png")}
                  alt="Github icon"
                  className={styles.link}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.contentImage}>
          <img
            src={getImageUrl("hero/trt_pfp2-circle.png")}
            alt="Hero image of me"
            className={styles.heroImg}
          />
        </div>
      </section>
      <div className={styles.arrowsDiv}>
        <a href="#about">
          <img
            src={getImageUrl("hero/whiteArrows.png")}
            alt="White arrows pointing down"
            className={styles.arrows}
          />
        </a>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </React.Fragment>
  );
};
