import React, { useState } from "react";
import styles from "../styles/hamburguer.module.css";

function HamburguerButton({ isOpened }) {
  return (
    <div className={`${styles.wrapper} ${isOpened ? styles.change : ""}`}>
      <div className={styles.bar1}></div>
      <div className={styles.bar2}></div>
      <div className={styles.bar3}></div>
    </div>
  );
}

export default HamburguerButton;
