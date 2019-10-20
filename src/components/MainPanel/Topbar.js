import React from "react";
import styles from "./MainPanel.module.css";

const Topbar = ({
  showAverage,
  studentCount,
  activeClass,
  setAverage,
  averageClassPerformance
}) => {
  return (
    <div className={styles.topbar}>
      <div className={styles.classDetails}>
        <div className={styles.topbarLeft}>
          <div className={styles.classText}>{activeClass}</div>
          <div className={styles.studentText}>{studentCount} Students</div>
        </div>
        <div className={styles.topbarRight}>
          <button
            className={`${styles.averageButton} ${showAverage &&
              styles.averageButtonActive}`}
            onClick={() => setAverage(!showAverage)}
          >
            {showAverage ? "Hide Average" : "Show Average"}
          </button>
        </div>
      </div>
      {showAverage && (
        <div className={styles.averagePerformanceCard}>
          <span>
            Classroom Average Performance: {averageClassPerformance.toFixed(2)}%
          </span>
        </div>
      )}
    </div>
  );
};

export default Topbar;
