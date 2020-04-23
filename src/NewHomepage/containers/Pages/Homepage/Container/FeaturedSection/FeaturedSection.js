import React from "react";
import { connect } from "react-redux";
import { getFeaturedSection } from "../../../../../redux/actions/Homepage/FeaturedSectionAction";
import * as Utility from "../../../../../../utility/DateTitle/DateTitle";
// import GoogleAd from "../../../../../../AdsComponent/GoogleAd";
import "./FeaturedSection.css";
import FeaturedCards from "../../Components/Cards/FeaturedCards/FeaturedCards";
import HeadingName from "../../Components/HeadingName/HeadingName";
import EditorPick from "../EditorPick/EditorPick";
import LoadingCards from "../../Components/Cards/LoadingCards/LoadingCards";

class FeaturedSection extends React.Component {
  componentDidMount() {
    this.props.getFeaturedSection();
  }

  render() {
    var DisplayingPopularData;

    DisplayingPopularData = this.props.popularDatas.map((data, index) => {
      return (
        <FeaturedCards
          key={index}
          title={Utility.handleTitleChange(data.title)}
          articleLink={`/@${data.author}/${data.slug_without_uuid_field}-${data.uuid_field}`}
          description={data.description.slice(0, 70) + "..."}
          editorCard={false}
        />
      );
    });

    return (
      <div className="featuredSec_container-elements">
        <HeadingName headingName="Popular on Vigyaa" />
        {this.props.loading ? <LoadingCards detail /> : null}
        {this.props.loading ? <LoadingCards detail /> : null}
        {this.props.loading ? <LoadingCards detail /> : null}
        {this.props.loading ? <LoadingCards detail /> : null}
        {DisplayingPopularData}
        {/*  */}
        {/* <GoogleAd
            adSlot="8881279412"
            style={{
              display: "block",
              width: "300px",
              height: "250px"
            }}
          /> */}
        <EditorPick />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    popularDatas: state.fetchPopularReducer.popularData,
    loading: state.fetchPopularReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFeaturedSection: () => {
      dispatch(getFeaturedSection());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedSection);
