"use client";
import React from "react";
import styles from "../styles/navfoot.module.css";
import { useState } from "react";

export default function Nav() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <nav className={styles.nav}>
      <h1>Company Name</h1>
      <ul className={styles.ul}>
        <li className={styles.navLi}>
          <a href="/">Home</a>
        </li>
        <li className={styles.navLi}>
          <span
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ cursor: "pointer" }}
          >
            About Us
            <ul
              style={{ display: isHovered ? "block" : "none" }}
              className={styles.dropdownNav}
            >
              <li>
                <a href="/about">Company Profile</a>
              </li>
              <li>
                <a href="/team">Our Team</a>
              </li>
              <li>
                <a href="/strength">Our Strength</a>
              </li>
              <li>
                <a href="/chooseus">Why Choose Us</a>
              </li>
            </ul>
          </span>
        </li>
        <li className={styles.navLi}>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li className={styles.navLi}>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}
