import React from "react";
import styles from "./styles.module.css";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image: string;
  stack: string;
}

export default function Project({
  title,
  subtitle,
  description,
  icon,
  image,
  stack,
}: Props) {

  return (
    <div className={styles.projectCard}>
      <span className={styles.projectTitleContainer}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <h4 className={styles.projectSubtitle}>{subtitle}</h4>
      </span>
      <div className={styles.projectCardContainer}>
        <div className={styles.projectCardImageContainer}>
          <div className={styles.projectCardImageIconContainer}>
            <img src={icon} className={styles.projectCardImageIcon} />
          </div>
          <img className={styles.projectCardImage} src={image} />
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>{description}</p>
          <a href="#" className={styles.descriptionButton}>
            view-project
          </a>
        </div>
      </div>
    </div>
  );
}
