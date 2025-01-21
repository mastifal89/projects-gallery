"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import Project from "@/app/components/project/project";
import Image from "next/image";
import { projects } from "@/app/utils/projectList";
import { stack } from "@/app/utils/stackList";
import useFetchRepos from "@/app/hooks/useFetchRepos";

export default function Page() {
  const { repos, loading, error } = useFetchRepos();

  console.log(repos, loading, error);

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
        const newFilter = filter.filter((item) => item !== stack);

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
          <Image height={10} width={10}
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
              <Image height={15} width={15}
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
            <Image height={15} width={15}
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
                link={project.link}
                stack={project.stack}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
