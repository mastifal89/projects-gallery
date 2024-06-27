import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { GithubIcon } from "../../../utils/githubIcon";
import { Footer } from "../components/footer/footer";

export default function DashboardLayout({ children }) {
  return (
    <div className={styles.dashboardLayout}>
      <header className={styles.dashboardHeader}>
        <nav className={styles.dashboardNav}>
            <GithubIcon />
          <div className={styles.dashboardNameContainer}>
            <Link href="/" className={styles.dashboardName}>blasco juan manuel</Link>
          </div>
          <div className={styles.dashBoardItemContainer}>
            <Link href="/" className={styles.dashboardItem}>_hello</Link>
            <Link href="/about-me" className={styles.dashboardItem}>_about-me</Link>
            <Link href="/projects" className={styles.dashboardItem}>_projects</Link>
          </div>
        </nav>
        <div
          className={styles.dashboardItem}
          style={{ borderLeft: "1px solid #1e2d3d" }}
        >
          _contact-me
        </div>
      </header>
      {children}
      <Footer />
    </div>
  );
}
