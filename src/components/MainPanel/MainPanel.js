import React from "react";
import styles from "./MainPanel.module.css";
import DefaultPage from "./DefaultPage";
import {
  getAverageClassPerformance,
  getStudentCount,
  getStudentsData
} from "../../utils";
import { setAverage } from "../../actions";
import { connect } from "react-redux";
import Topbar from "./Topbar";
import ClassContent from "./ClassContent";

class MainPanel extends React.Component {
  render() {
    let {
      activeClass,
      showAverage,
      averageClassPerformance,
      studentCount,
      setAverage,
      studentData
    } = this.props;

    if (!activeClass) return <DefaultPage />;
    return (
      <div className={styles.mainPanel}>
        <Topbar
          activeClass={activeClass}
          showAverage={showAverage}
          averageClassPerformance={averageClassPerformance}
          studentCount={studentCount}
          setAverage={setAverage}
        />
        <div className={styles.separator} />
        <ClassContent classData={studentData} />
      </div>
    );
  }
}

const mapStateToProps = ({ globals, mainPanel }) => {
  return {
    activeClass: globals.activeClass,
    showAverage: mainPanel.showAverage,
    studentCount: getStudentCount(globals.activeClass),
    averageClassPerformance: getAverageClassPerformance(globals.activeClass),
    studentData: getStudentsData(globals.activeClass)
  };
};

export default connect(
  mapStateToProps,
  { setAverage }
)(MainPanel);
