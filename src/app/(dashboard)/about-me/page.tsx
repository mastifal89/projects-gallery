"use client";
import React, { useEffect, useState } from "react";
import { generateRandomCodeSnippet } from "../../utils/codeSnippetGenerator";
import styles from "./styles.module.css";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import Image from "next/image";

const personalInfo = [
  {
    title: "bio",
    content: `/**
 *
 * About me
 * I have 5 years of experience in web development lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 *
 * Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.
 */`,
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

const codeSnippets = [
  {
    username: "mastifal89",
    date: "17 months ago",
  },
  {
    username: "mastifal89",
    date: "8 months ago",
  },
];

export default function AboutMe() {
  const [section, setSection] = useState(0);
  const [codeSnippet, setCodeSnippet] = useState<any>([]);

  useEffect(() => {
    let snippets = [];
    for (let i = 0; i < codeSnippets.length; i++) {
      snippets.push(generateRandomCodeSnippet());
    }
    setCodeSnippet(snippets);
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, [section]);

  const handleSectionClick = (section: number) => {
    setSection(section);
  };

  return (
    <main className={styles.main}>
      <div className={styles.aboutMeMenu}>
        <section className={styles.sections}>
          <div className={styles.sectionIcon}>
            <Image height={25} width={25} alt="image" src="/icons/info-professional.svg" />
          </div>
          <div className={styles.sectionIcon}>
            <Image height={25} width={25} alt="image" src="/icons/info-personal.svg" />
          </div>
          <div className={styles.sectionIcon}>
            <Image height={25} width={25} alt="image" src="/icons/info-hobbies.svg" />
          </div>
        </section>
        <section className={styles.sectionContent}>
          <div className={styles.sectionTitle}>
            <Image height={10} width={10} alt="image" className={styles.arrow} src="/icons/arrow.svg" />
            <p className={styles.sectionPersonalInfo}>personal-info</p>
          </div>
          {personalInfo.map((info, index) => (
            <div
              key={index}
              className={styles.itemContainer}
              onClick={() => handleSectionClick(index)}
            >
              <div className={styles.item}>
                <Image height={15} width={15} alt="image" className={styles.diple} src="/icons/diple.svg" />
                <Image height={15} width={15} alt="image" className={styles.folder} src={info.icon} />
                <p style={{ margin: 0 }}>{info.title}</p>
              </div>
            </div>
          ))}
          <div className={styles.sectionContact}>
            <Image height={10} width={10} alt="image" className={styles.arrow} src="/icons/arrow.svg" />
            <p className={styles.sectionPersonalInfo}>contacts</p>
          </div>
          <div className={styles.contactSources}>
            <div className={styles.contactSourcesItem}>
              <Image height={15} width={15} alt="image" className={styles.sourceItemsImage} src="/icons/email.svg" />
              <a className={styles.contactSourcesText} href="/">
                juanrata89@gmail.com
              </a>
            </div>
            <div className={styles.contactSourcesItem}>
              <Image height={15} width={15} alt="image" className={styles.sourceItemsImage} src="/icons/phone.svg" />
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
              <Image height={15} width={15} alt="image" className={styles.personalInfoImg} src="/icons/close.svg" />
            </div>
          </div>
          <div className={styles.bodyTextContainer}>
            {
              <pre className={styles.bodyText}>
                  <code className="language-javascript">
                    <span className={styles.textContent}>{personalInfo[section].content}</span>
                  </code>
              </pre>
            }
            <div className={styles.scrollBar}>
              <div className={styles.scroll}></div>
            </div>
          </div>
        </div>
        <div className={styles.bodyRight}>
          <div className={styles.bodyTab}></div>
          <div className={styles.snippetContainer}>
            <div className={styles.snippetSubContainer}>
              <h3 className={styles.snippetTitle}>{`// Code snippet showcase`}</h3>
              <div className={styles.snippets}>
                {codeSnippets.map((snippet, index) => (
                  <div key={index} className={styles.snippet}>
                    <div className={styles.snippetHeader}>
                      <div style={{ display: "flex" }}>
                        <Image height={15} width={15} alt="image"
                          src="/images/1551846149745.jfif"
                          className={styles.snippetImage}
                        />
                        <div className={styles.snippetHeaderAuthor}>
                          <a
                            id="username"
                            href="/"
                            target="_blank"
                            className={styles.snippetHeaderAuthorLink}
                          >
                            @{snippet.username}
                          </a>
                          <p className={styles.snippetHeaderAuthorDate}>
                            Created {snippet.date}
                          </p>
                        </div>
                      </div>
                      <div className={styles.snippetDetailsStarsContainer}>
                        <div className={styles.snippetDetails}>
                          <Image height={15} width={15} alt="image"
                            src="/icons/comments.svg"
                            className={styles.snippetDetailsIcon}
                          />
                          <span>details</span>
                        </div>
                        <div className={styles.snippetStars}>
                          <Image height={15} width={15} alt="image"
                            src="/icons/star.svg"
                            className={styles.snippetStarsIcon}
                          />
                          <span>stars</span>
                        </div>
                      </div>
                    </div>
                    <pre className={styles.snippetCodeContainer}>
                      <code className={styles.code}>{codeSnippet[index]}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
