import "./App.css";
import profil from "./assets/profil.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Contact from "./contact";
import { motion } from "motion/react";
import type { animate } from "motion";

function App() {
  const skillsList: string[] = [
    "html",
    "css",
    "bootstrap",
    "tailwind",
    "js",
    "typescript",
    "nodejs",
    "ReactJS",
    "react Native",
    "PHP",
    "git",
    "Mysql",
    "mongodb",
  ];
  return (
    <div className="background">
      <section id="hero">
        <div className="side">
          <div className="left">
            <motion.h3
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hello, Je suis{" "}
            </motion.h3>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Hasinaniaina Harilanto.
            </motion.h1>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Développeur Full Stack passionné, j'ai acquis au fil de mes
              expériences une solide expertise en développement web et mobile.
              Habitué à travailler de manière autonome, je sais analyser les
              besoins, concevoir des solutions techniques adaptées et mener à
              bien les projets qui me sont confiés.
            </motion.p>
            <motion.div
              className="link"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
            >
              <a
                className="download-cv"
                target="_blank"
                href="https://drive.google.com/file/d/1mPTm9gcqEeeD7Eg7lNFsWs02ef9jwuye/view?usp=drive_link"
              >
                Télécharger mon CV
              </a>
              <motion.a
                href="https://web.facebook.com/hasinaniaina.rakotondrainibe"
                target="_blank"
                whileHover={{ scale: 1.2 }}
              >
                <FontAwesomeIcon icon={faFacebook} className="social-media" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/hasinaniaina-rakotondrainibe-36617a172/"
                target="_blank"
                whileHover={{ scale: 1.2 }}
              >
                <FontAwesomeIcon icon={faLinkedin} className="social-media" />
              </motion.a>
            </motion.div>
          </div>
          <motion.div
            className="right"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.1 }}
          >
            <div className="image-cadre"></div>
            <div className="img-container">
              <img src={profil} alt="Mon profil" />
            </div>
          </motion.div>
        </div>
      </section>
      <section id="skills">
        <div className="side">
          <motion.div
            className="left"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h1>Compétences</h1>
          </motion.div>
          <div className="right">
            <motion.p
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Créer des expériences numériques utiles et agréables est au cœur
              de mon approche du développement. Grâce à ma maîtrise de
              différentes technologies front-end et back-end, je transforme les
              idées en solutions web et mobiles tout en privilégiant la qualité
              du code, la performance et l'expérience utilisateur.
            </motion.p>
            <ul className="list">
              {skillsList.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 + index / 10 }}
                  whileHover={{ scale: 1.2 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section id="experiences">
        <div className="side">
          <motion.div
            className="left"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1>Éxpériences</h1>
          </motion.div>
          <div className="right">
            <div className="first">
              <motion.div
                className="title"
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                DÉVELOPPEUR PHP CHEZ HUMAN CART’OFFICE
              </motion.div>
              <motion.div
                className="year"
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                2021 - 2023
              </motion.div>
              <motion.div
                className="detail"
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <ul>
                  <li>
                    Développement et maintenance de fonctionnalités stratégiques
                    sur la plateforme ERP/CRM OneCRM en PHP.
                  </li>
                  <li>
                    Participation active aux échanges avec les clients pour
                    comprendre les besoins métiers et proposer des solutions
                    techniques adaptées.
                  </li>
                  <li>
                    Contribution à l'amélioration continue de la plateforme par
                    la correction d'anomalies et l'optimisation du code.
                  </li>
                  <li>
                    Production de documentation technique facilitant la
                    maintenance et l'évolution du système.
                  </li>
                </ul>
              </motion.div>
            </div>
            <div className="second">
              <motion.div
                className="title"
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                DEVELOPPEUR WEB ET APPLICATION CHEZ DIRIS
              </motion.div>
              <motion.div
                className="year"
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                2020-2021
              </motion.div>
              <motion.div
                className="detail"
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <ul>
                  <li>
                    Développement Full Stack de la plateforme Viewwer.com avec
                    Node.js.
                  </li>
                  <li>
                    Refonte complète du Back-Office afin d'améliorer
                    l'expérience utilisateur et l'efficacité opérationnelle.
                  </li>
                  <li>
                    Conception et développement de l'application mobile Android
                    connectée aux services de la plateforme.
                  </li>
                  <li>
                    Participation aux phases de conception, développement, tests
                    et déploiement.
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="side">
          <motion.div
            className="left"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h1>Contactez-moi</h1>
            <div className="link">
              <motion.a
                href="https://web.facebook.com/hasinaniaina.rakotondrainibe"
                target="_blank"
                whileHover={{ scale: 1.2 }}
              >
                <FontAwesomeIcon icon={faFacebook} className="social-media" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/hasinaniaina-rakotondrainibe-36617a172/"
                target="_blank"
                whileHover={{ scale: 1.2 }}
              >
                <FontAwesomeIcon icon={faLinkedin} className="social-media" />
              </motion.a>
            </div>
          </motion.div>
          <div className="right">
            <Contact />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
