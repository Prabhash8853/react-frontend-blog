import React from "react";
import "./TrendingCards.css";

class TrendingCards extends React.Component {
  render() {
    return (
      <div className="card mg-tp-10">
        <div className="card-body cd-body-trending">
          <h1 className="card-title article-head">
            <a href={this.props.articleLink}>{this.props.title}</a>
          </h1>

          <p className="card-text cd-desc-trending mg-btm">
            <a href={this.props.articleLink}>{this.props.description}</a>
          </p>

          <div className="author-div">
            <h4 className="card-text author-imgCrd-mb">
              <a href={this.props.authorLink}>{this.props.authorName}</a>
            </h4>
          </div>

          <div className="article-views-details">
            <div className="fl-1 text-left">{this.props.num_of_views}</div>
            <div
              className="fl-2-cd text-right like-mb"
              onClick={this.props.postlike}
            >
              {this.props.liked}
            </div>
            <div
              className="fl-2-cd text-right bookmark-mb"
              onClick={this.props.postBookmark}
            >
              {this.props.bookmarked}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrendingCards;
