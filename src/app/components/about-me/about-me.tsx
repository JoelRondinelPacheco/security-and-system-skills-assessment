'use client'
import React, { SVGProps } from "react";
import styles from "./styles.module.css";
import Button from "../button/button";
import image from "../../../../public/profile.jpg";
import Image from "next/image";

export function MonoIconsEmail(props?: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 32 32" {...props}><path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"/></svg>
  )
}

const AboutMe = () => {

  const handleGoToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section className={`container ${styles.container}`}>
      <div className={`wrapper ${styles.wrapper}`}>
        <div className={styles.imageWrapper}>
          <Image

            src={image}
            alt="Profile picture"
            fill
            style={{objectFit: "cover"}}
          />
        </div>
        <div className={styles.aboutMeWrapper}>
          <div>
            <h3 className={styles.title}>Hello! I`&apos;`m Joel Rondinel Pacheco 👋</h3>
            <p className={styles.details}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              quaerat deserunt sint tenetur doloribus aperiam.
            </p>
          </div>
          <div className={styles.buttonWrapper} onClick={handleGoToBottom}>
            <Button>
              <div className={styles.buttonLabel}><span>CONTACT ME</span><span className={styles.buttonIcon}>{MonoIconsEmail()}</span></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
