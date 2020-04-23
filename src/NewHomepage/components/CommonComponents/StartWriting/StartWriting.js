import * as React from "react";
import "./StartWriting.css";

class StartWriting extends React.Component {
  render() {
    return (
      <div className="strt-writing">
        <div className="strt-wrting-cntnt">
          <p>Everyone has a Story to Tell and an Experience to share</p>
        </div>
        <div className="strt-writing-input">
          <a href="/api/collection/create/temp/">
            <input
              type="text"
              name="writeArticle"
              placeholder="Write Something..."
            />
          </a>
        </div>
      </div>
    );
  }
}

export default StartWriting;
