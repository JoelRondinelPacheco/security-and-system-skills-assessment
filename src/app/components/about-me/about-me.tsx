import React from 'react';
import styles from "./styles.module.css";

const AboutMe = () => {
  return (
    <section className={styles.wrapper}>
        <div className={styles.imageWrapper}>

        </div>
        <div className={styles.aboutMeWrapper}>
            <h3>Hello!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat deserunt sint tenetur doloribus aperiam. 
            </p>
        </div>
    </section>
  )
}

export default AboutMe