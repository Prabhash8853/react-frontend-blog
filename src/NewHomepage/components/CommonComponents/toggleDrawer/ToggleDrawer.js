import * as React from "react";
import "./toggleDrawer.css";

class ToggleDrawer extends React.Component {
  render() {
    return (
      <div className="sideNav-toggle" onClick={this.props.click}>
        <div className="icon-bar"></div>
        <div className="icon-bar"></div>
        <div className="icon-bar"></div>
      </div>
    );
  }
}

export default ToggleDrawer;
