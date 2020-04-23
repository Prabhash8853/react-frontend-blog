import React from "react";
import { connect } from "react-redux";
import { getSearch } from "../../../../redux/actions/SeachAction/SearchAction";
import { createBrowserHistory } from "history";
import "./SlidingSearch.css";

class SlidingSearch extends React.Component {
  render() {
    let classes = ["sliding_search"];
    if (this.props.handleOpenSearch === true) {
      classes.push("slide-left");
    }
    return <div className={classes.join(" ")}></div>;
  }
}

export default SlidingSearch;
