import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="appContainer">
        <Layout />
      </div>
    );
  }
}
