import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

export const Footer = () => {
  return (
    <div>
      <footer className={styles.footerContainer}>
        <div className={styles.footerFirstSection}>
          <div className={styles.footerSocialTitle}>find me in:</div>
          <div className={styles.footerSocialIcons}>
            <a href="https://x.com/mastifal89" className={styles.footerSocialIconsLink}>
              <Image height={15} width={15}
                src="/icons/twitter-icon.svg"
                alt="twitter"
                className={styles.footerSocialIconsImg}
              />
            </a>
            <a href="#" className={styles.footerSocialIconsLink}>
              <Image height={15} width={15}
                src="/icons/facebook-icon.svg"
                alt="facebook"
                className={styles.footerSocialIconsImg}
              />
            </a>
          </div>
        </div>
        <a target="_blank" href="https://github.com/mastifal89" className={styles.footerGithubContainer}>
          @mastifal89
          <Image height={15} width={15}
            src="/icons/github-icon.svg"
            alt="github"
            className={styles.footerGithub}
          />
        </a>
      </footer>
    </div>
  );
};
