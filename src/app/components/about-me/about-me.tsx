import React from "react";
import styles from "./styles.module.css";
import Button from "../button/button";

const AboutMe = () => {
  return (
    <section className={`container ${styles.container}`}>
      <div className={`wrapper ${styles.wrapper}`}>
        <div className={styles.imageWrapper}></div>
        <div className={styles.aboutMeWrapper}>
          <div>
            <h3 className={styles.title}>Hello! I'm Joel Rondinel Pacheco 👋</h3>
            <p className={styles.details}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              quaerat deserunt sint tenetur doloribus aperiam.
            </p>
          </div>
          <div className={styles.buttonWrapper}>
            <Button>
              <p>Base</p>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
