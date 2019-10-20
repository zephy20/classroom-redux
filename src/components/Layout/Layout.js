import React from "react";

import MainPanel from "../MainPanel/MainPanel";
import SidePanel from "../SidePanel/SidePanel";
import styles from "./Layout.module.css";

export default class Layout extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className={styles.layout}>
        <SidePanel />
        <MainPanel />
      </div>
    );
  }
}
