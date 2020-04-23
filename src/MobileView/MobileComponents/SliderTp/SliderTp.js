import React from "react";

import "./slider.css";
import { Link } from "react-router-dom";

const SliderTp = props => {
  return (
    <div className="slider-category">
      <div className="slider-content">
        <div className="fl-3">
          <i className="fas fa-chevron-left"></i> {"\u00A0"}
          <button
            className={
              props.homeValue ? "btn-slider link active" : "btn-slider link"
            }
            onClick={props.HomeClicked}
          >
            Home
          </button>
        </div>

        <div className="fl-3">
          <button
            className={
              props.trendingValue ? "btn-slider link active" : "btn-slider link"
            }
            onClick={props.TrendingClicked}
          >
            Trending
          </button>
        </div>

        <div className="fl-3">
          <button
            className={
              props.editorValue ? "btn-slider link active" : "btn-slider link"
            }
            onClick={props.EditorClicked}
          >
            Editor's Pick
          </button>
        </div>

        <div className="fl-3">
          <Link to="/category-list" className="react-link">
            <button className="btn-slider link  fl-3-collections">
              Collections
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SliderTp;
