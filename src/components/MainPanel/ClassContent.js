import React from "react";
import styles from "./Content.module.css";
import Progress from "react-progressbar";
import { getStudentMarks } from "../../utils";

const ClassContent = ({ classData }) => {
  let { students } = classData;

  const studentMarksDetails = data => {
    let subjects = data["marks"];
    return Object.keys(subjects).map((item, i) => (
      <div key={i} className={styles.subjectList}>
        <div className={styles.subjectName}>{item}</div>
        <div className={styles.marksProgressBar}>
          <Progress className={styles.progressBar} completed={subjects[item]} />
        </div>
        <div className={styles.marksPercentage}>{subjects[item]}%</div>
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardList}>
        {students.map((item, key) => (
          <div key={key} className={styles.cardContainer}>
            <div className={styles.cardTop}>
              <div className={styles.studentName}>
                <div>{item.name}</div>
              </div>
              <div className={styles.averageMarks}>
                {getStudentMarks(item).toFixed(2)}%
              </div>
            </div>
            <div className={styles.cardBottom}>{studentMarksDetails(item)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassContent;
