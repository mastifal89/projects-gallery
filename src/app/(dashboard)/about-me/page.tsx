"use client";
import React, { useEffect, useState } from "react";
import {
  generateRandomCodeSnippet,
  getRandomElement,
} from "../../utils/codeSnippetGenerator";
import styles from "./styles.module.css";

const personalInfo = [
  {
    title: "bio",
    content: "asdasdasdasdasd",
    icon: "/icons/folder1.svg",
  },
  {
    title: "interests",
    content: "asdasdasdasdasd",
    icon: "/icons/folder2.svg",
  },
  {
    title: "education",
    content: "asdasdasdasdasd",
    icon: "/icons/folder3.svg",
  },
];

export default function AboutMe() {
  const [section, setSection] = useState(0);
  const [codeSnippet, setCodeSnippet] = useState("");

  useEffect(() => {
    const snippet = generateRandomCodeSnippet();
    setCodeSnippet(snippet);
  }, []);

  const handleSectionClick = (section: number) => {
    setSection(section);
  };

  return (
    <main className={styles.main}>
      <div className={styles.aboutMeMenu}>
        <section className={styles.sections}>
          <div className={styles.sectionIcon}>
            <img src="/icons/info-professional.svg" />
          </div>
          <div className={styles.sectionIcon}>
            <img src="/icons/info-personal.svg" />
          </div>
          <div className={styles.sectionIcon}>
            <img src="/icons/info-hobbies.svg" />
          </div>
        </section>
        <section className={styles.sectionContent}>
          <div className={styles.sectionTitle}>
            <img className={styles.arrow} src="/icons/arrow.svg" />
            <p className={styles.sectionPersonalInfo}>personal-info</p>
          </div>
          {personalInfo.map((info, index) => (
            <div
              key={index}
              className={styles.itemContainer}
              onClick={() => handleSectionClick(index)}
            >
              <div className={styles.item}>
                <img className={styles.diple} src="/icons/diple.svg" />
                <img className={styles.folder} src={info.icon} />
                <p style={{ margin: 0 }}>{info.title}</p>
              </div>
            </div>
          ))}
          <div className={styles.sectionContact}>
            <img className={styles.arrow} src="/icons/arrow.svg" />
            <p className={styles.sectionPersonalInfo}>contacts</p>
          </div>
          <div className={styles.contactSources}>
            <div className={styles.contactSourcesItem}>
              <img className={styles.sourceItemsImage} src="/icons/email.svg" />
              <a className={styles.contactSourcesText} href="/">
                juanrata89@gmail.com
              </a>
            </div>
            <div className={styles.contactSourcesItem}>
              <img className={styles.sourceItemsImage} src="/icons/phone.svg" />
              <a className={styles.contactSourcesText} href="/">
                +543525487411
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.bodyLeft}>
          <div className={styles.bodyTab}>
            <div className={styles.tab}>
              <p className={styles.personalInfoText}>personal-info</p>
              <img className={styles.personalInfoImg} src="/icons/close.svg" />
            </div>
          </div>
          <div className={styles.bodyTextContainer}>
            <div className={styles.bodyText}>
              <div className={styles.text}>asdasdasdasdasd</div>
            </div>
            <div className={styles.scrollBar}>
              <div className={styles.scroll}></div>
            </div>
          </div>
        </div>
        <div className={styles.bodyRight}>
          <div className={styles.bodyTab}></div>
          <div className={styles.snippetContainer}>
            <div className={styles.snippetSubContainer}>
              <h3 className={styles.snippetTitle}>// Code snippet showcase</h3>
              <pre>
                <code className="language-javascript">{codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
