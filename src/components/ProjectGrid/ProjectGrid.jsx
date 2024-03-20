import styles from "./ProjectGrid.module.css";
import { getImageUrl } from "../../utils";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import projects from "../../data/projects.json";

export const ProjectGrid = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        <Row xs={1} md={3} className="g-4">
          {projects.map((project, id) => (
            <Col key={id}>
              <Card className={styles.card}>
                <Card.Img
                  className={styles.projectImage}
                  variant="top"
                  src={getImageUrl(project.imageSrc)}
                />
                <Card.Body className={styles.projectBody}>
                  <Card.Title className={styles.projectTitle}>
                    {project.title}
                  </Card.Title>
                  <Card.Text className={styles.projectDescription}>
                    {project.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className={styles.projectFooter}>
                  <ul className={styles.skills}>
                    {project.skills.map((skill, id) => {
                      return (
                        <li key={id} className={styles.skill}>
                          {skill}
                        </li>
                      );
                    })}
                  </ul>
                </Card.Footer>

                <div className={styles.links}>
                  {project.demo != "n/a" ? (
                    <a href={project.demo} className={styles.link}>
                      Demo
                    </a>
                  ) : (
                    ""
                  )}

                  <a href={project.source} className={styles.link}>
                    Source
                  </a>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};
