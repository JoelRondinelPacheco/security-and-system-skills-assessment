"use client";
import React, { useEffect, useRef } from "react";
import { Interest } from "@/lib/interest/domain/interest";
import styles from "./styles.module.css";
import { getCardIcon } from "../utils";

const InterestCard = ({ title, description, icon }: Interest) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const iconCard = getCardIcon(icon, { width: "1.2em", height: "1.2em" });

  const handleHover = (e: PointerEvent) => {
    if (!cardRef.current) {
      return;
    }

    const x = e.pageX - cardRef.current.offsetLeft;
    const y = e.pageY - cardRef.current.offsetTop;

    cardRef.current?.setAttribute(
      "style",
      `--mouse-x: ${x}px; --mouse-y: ${y}px;`
    );
  };

  useEffect(() => {
    document.body.addEventListener("pointermove", (e) => {
      handleHover(e);
    });

    return () => {
      document.body.removeEventListener("pointermove", (e) => {
        handleHover(e);
      });
    };
  }, []);

  return (
    <div ref={cardRef} className={styles.container}>
      <div className={styles.imageContainer}>{iconCard}</div>
      <div className={styles.infoWrapper}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default InterestCard;
