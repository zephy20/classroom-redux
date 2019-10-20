import React from "react";
import { connect } from "react-redux";
import styles from "./SidePanel.module.css";
import { setActiveClass } from "../../actions";

class SidePanel extends React.Component {
  render() {
    let { activeClass, setActiveClass, classes } = this.props;
    return (
      <div className={styles.sidePanel}>
        <div className={styles.topHeaderContainer}>
          <div className={styles.topHeaderText}>
            <span className={styles.headerName}>School: XYZ</span>
          </div>
        </div>
        <div className={styles.classListContainer}>
          <div className={styles.classList}>
            <ul>
              {classes.map((item, i) => (
                <li
                  key={i}
                  className={
                    activeClass === item.classname
                      ? styles.listItemSelected
                      : styles.listItem
                  }
                  onClick={() => setActiveClass(item.classname)}
                >
                  <div>{item.classname}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ globals }) => {
  return {
    activeClass: globals.activeClass,
    classes: globals.classroomData
  };
};

export default connect(
  mapStateToProps,
  { setActiveClass }
)(SidePanel);
