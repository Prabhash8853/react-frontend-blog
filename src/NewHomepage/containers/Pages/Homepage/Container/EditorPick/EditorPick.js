import React from "react";
import { connect } from "react-redux";
import "./EditorPick.css";
import * as actions from "../../../../../redux/actions/Homepage/EditorPicksAction";
import * as Utility from "../../../../../../utility/DateTitle/DateTitle";
import HeadingName from "../../Components/HeadingName/HeadingName";
import FeaturedCards from "../../Components/Cards/FeaturedCards/FeaturedCards";
import LoadingCards from "../../Components/Cards/LoadingCards/LoadingCards";

class EditorPick extends React.Component {
  componentDidMount() {
    this.props.getEditorPicks();
  }

  render() {
    var DisplayingEditorData;

    DisplayingEditorData = this.props.editorPickDatas.map((data, index) => {
      return (
        <FeaturedCards
          key={index}
          editorCard={true}
          title={Utility.handleTitleChange(data.title)}
          description={data.description.slice(0, 70) + "..."}
          articleLink={`/@${data.author}/${data.slug_without_uuid_field}-${data.uuid_field}`}
          // search={data.uuid_field}
          authorName={data.author_fullnme}
          authorLink={"/author/" + data.author}
        />
      );
    });

    return (
      <div className="editorpick_container">
        <HeadingName headingName="Editor's Pick" />
        {this.props.loading ? <LoadingCards detail /> : null}
        {this.props.loading ? <LoadingCards detail /> : null}
        {DisplayingEditorData}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editorPickDatas: state.fetchEditorPick.editorPickData,
    loading: state.fetchEditorPick.loading,
    error: state.fetchEditorPick.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEditorPicks: () => {
      dispatch(actions.getEditorPicks());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorPick);
