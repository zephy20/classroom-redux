import React from "react";
import styles from "./MainPanel.module.css";

const DefaultPage = () => {
  return (
    <div className={styles.mainPanel}>
      <div className={styles.defaultView}>
        <div className={styles.defaultText}>Select a Class</div>
      </div>
    </div>
  );
};

export default DefaultPage;
