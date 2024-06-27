"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import Project from "@/app/components/project/project";

const projects = [
  {
    title: "Project 1",
    subtitle: " // This is a subtitle",
    description: "This is a description",
    icon: "/icons/react-project-icon.svg",
    image: "/images/react-project.png",
    stack: "react",
  },
  {
    title: "Project 2",
    subtitle: " // This is a subtitle",
    description: "This is a description",
    icon: "/icons/react-project-icon.svg",
    image: "/images/react-project.png",
    stack: "react",
  },
  {
    title: "Project 3",
    subtitle: " // This is a subtitle",
    description: "This is a description",
    icon: "/icons/react-project-icon.svg",
    image: "/images/react-project.png",
    stack: "react",
  },
  {
    title: "Project 4",
    subtitle: " // This is a subtitle",
    description: "This is a description",
    icon: "/icons/react-project-icon.svg",
    image: "/images/react-project.png",
    stack: "react",
  },
  {
    title: "Project 5",
    subtitle: " // This is a subtitle",
    description: "This is a description",
    icon: "/icons/react-project-icon.svg",
    image: "/images/react-project.png",
    stack: "react",
  },
  {
    title: "Project 6",
    subtitle: " // This is a subtitle",
    description: "This is a description",
    icon: "/icons/react-project-icon.svg",
    image: "/images/react-project.png",
    stack: "react",
  },
];

let stack = [
  {
    name: "React",
    icon: "/icons/react-icon.svg",
    clicked: 0,
  },
  {
    name: "HTML",
    icon: "/icons/html-icon.svg",
    clicked: 0,
  },
  {
    name: "CSS",
    icon: "/icons/css-icon.svg",
    clicked: 0,
  },
  {
    name: "Vue",
    icon: "/icons/vue-icon.svg",
    clicked: 0,
  },
  {
    name: "Angular",
    icon: "/icons/angular-icon.svg",
    clicked: 0,
  },
];

export default function page() {
  const [filter, setFilter] = useState(["all"]);
  const [stacks, setStacks] = useState(stack);

  const handleFilter = (stack: string) => {
    if (stack === "all") {
      setFilter(["all"]);
      setStacks(
        stacks.map((stackItem) => {
          stackItem.clicked = 0;
          return stackItem;
        })
      );
    } else {
      if (filter.includes(stack)) {
        // Remove the stack from the filter
        const newFilter = filter.filter((item) => item !== stack);

        // If no stack is left after removal, reset to "all"
        setFilter(newFilter.length === 0 ? ["all"] : newFilter);

        setStacks(
          stacks.map((stackItem) => {
            if (stackItem.name === stack) {
              stackItem.clicked = 0;
            }
            return stackItem;
          })
        );
      } else {
        // Add the new stack and remove "all" if present
        const newFilter = [...filter.filter((item) => item !== "all"), stack];

        setFilter(newFilter);

        setStacks(
          stacks.map((stackItem) => {
            if (stackItem.name === stack) {
              stackItem.clicked = 1;
            }
            return stackItem;
          })
        );
      }
    }
  };

  return (
    <div className={styles.projectsContainer}>
      <div className={styles.filterMenu}>
        <div className={styles.filterTitle}>
          <img
            src="/icons/arrow-fill.svg"
            alt="arrow"
            className={styles.arrowTitle}
          />
          <p style={{ margin: 0 }}>projects</p>
        </div>
        <nav className={styles.navFilters}>
          {stacks.map((stack) => (
            <div className={styles.navFiltersItem} key={stack.name}>
              <input
                onChange={(e) => handleFilter(e.currentTarget.value)}
                type="checkbox"
                className={styles.navFiltersCheckbox}
                checked={stack.clicked === 1}
                value={stack.name}
              />
              <img
                src={stack.icon}
                alt={stack.name}
                className={styles.navFiltersIcon}
              />
              <span className={styles.navFiltersText}>{stack.name}</span>
            </div>
          ))}
        </nav>
      </div>
      <div className={styles.projectsBody}>
        <div className={styles.bodyTitle}>
          <div className={styles.bodyTitleContainer}>
            <p className={styles.bodyTitleText}>
              {stacks.filter((stack) => stack.clicked === 1).length > 0
                ? stacks
                    .filter((stack) => stack.clicked === 1)
                    .map((stack) => stack.name)
                    .join("; ")
                : "all;"}
            </p>
            <img
              src="/icons/close.svg"
              alt="close"
              className={styles.bodyTitleIcon}
            />
          </div>
        </div>
        <div className={styles.projectsBodyContainer}>
          {projects
            .filter((project) => {
              if (filter.includes("all")) {
                return true; // Show all projects if "all" is included in the filter
              }
              return filter.some((stack) => project.stack.toUpperCase().includes(stack.toUpperCase())); // Check if any stack in the filter matches the project's stack
            })
            .map((project) => (
              <Project
                key={project.title}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                icon={project.icon}
                image={project.image}
                stack={project.stack}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
