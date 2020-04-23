import React from "react";
import "./SliderTop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, withRouter } from "react-router-dom";

const SliderTop = (props) => {
  return (
    <div className="slidertop_container">
      <div className="slider-elements">
        <div className="home_section flex-1">
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div className="home_section flex-3 color-grey text-left">
          <Link to={`/category-list/81`} style={{ fontSize: "12px" }}>
            Health & Fitness
          </Link>
          <span
            style={{
              borderRight: "1px solid #707070",
              paddingLeft: "10px",
            }}
          ></span>
        </div>
        <div className="trending_section flex-3 color-grey text-left">
          <Link to="/category-list/3" style={{ fontSize: "12px" }}>
            Technology
          </Link>
          <span
            style={{
              paddingLeft: "10px",
              borderRight: "1px solid #707070",
            }}
          ></span>
        </div>
        <div className="editorPick_section flex-3 color-grey text-left">
          <Link to="/category-list/32" style={{ fontSize: "12px" }}>
            How To
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SliderTop);
