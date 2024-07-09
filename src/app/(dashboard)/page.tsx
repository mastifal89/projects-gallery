"use client";
import React from "react";
import styles from "./styles.module.css";
import Snake from "../components/snakeGame/snake";
import { useTextWriting } from "../utils/useTextWriting";

export default function Dashboard() {
  const text = 'Front-end Developer';
  const speed = 100; // Speed in milliseconds
  const displayedText = useTextWriting(text, speed);

  return (
    <main className={styles.dashboardMain}>
      <div className={styles.dashboardGradientBlue}></div>
      <div className={styles.dashboardGradientGreen}></div>
      <section className={styles.firstSection}>
        <div className={styles.firstSectionHead}>
          <span className={styles.firstSectionHeadTitle}>Hi all, I am</span>
          <div className={styles.firstSectionHeadName}>Juan Blasco</div>
          <span className={styles.firstSectionDeveloper}>
            &#62; &nbsp;
            <div id="stack">
              {displayedText}
              <span className={styles.blinkingCursor}> |</span>
            </div>
          </span>
        </div>
        <div className={styles.firstSectionInfo}>
          <span className={styles.info}> // complete the game to continue </span>
          <span className={styles.info}> // you can also see it on my Github page </span>
          <p className={styles.code}>
            <span className={styles.identifier}> const</span>
            <span className={styles.variable}> githubLink</span>
            <span className={styles.operator}> =</span>
            <a className={styles.string} target="_blank" href="https://github.com/mastifal89"> "https://github.com/mastifal89"</a>
          </p>
        </div>
      </section>
      <section className={styles.secondSection} style={{ display: "none" }}>
        <Snake />
      </section>
    </main>
  );
}
