`use client`;
import React from "react";
import styles from "../styles/navfoot.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h1>Company Name</h1>
        <div className={styles.footerMainContent}>
          <div>
            <h3>Get in Touch</h3>
            <p>123-456-7890</p>
            <p>info@email.com</p>
          </div>
          <div>
            <h3>Visit Us</h3>
            <p>H no.123 Block A</p>
          </div>
          <div>
            <h3>Follow Us</h3>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>

      <p>© 2021 Company Name. All rights reserved.</p>
    </footer>
  );
}
