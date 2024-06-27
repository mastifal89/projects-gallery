import React from "react";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div>
      <footer className={styles.footerContainer}>
        <div className={styles.footerFirstSection}>
          <div className={styles.footerSocialTitle}>find me in:</div>
          <div className={styles.footerSocialIcons}>
            <a href="#" className={styles.footerSocialIconsLink}>
              <img
                src="/icons/twitter-icon.svg"
                alt="twitter"
                className={styles.footerSocialIconsImg}
              />
            </a>
            <a href="#" className={styles.footerSocialIconsLink}>
              <img
                src="/icons/facebook-icon.svg"
                alt="facebook"
                className={styles.footerSocialIconsImg}
              />
            </a>
          </div>
        </div>
        <a target="_blank" href="https://github.com/mastifal89" className={styles.footerGithubContainer}>
          @mastifal89
          <img
            src="/icons/github-icon.svg"
            alt="github"
            className={styles.footerGithub}
          />
        </a>
      </footer>
    </div>
  );
};
