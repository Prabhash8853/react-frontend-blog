import React from "react";
import { connect } from "react-redux";
import { getSearch } from "../../../../redux/actions/SeachAction/SearchAction";

class SearchPage extends React.Component {
  componentDidMount() {
    // this.props.history.push('/search/collection/results/?query=${obj.query}`)
  }

  render() {
    console.log(this.props.searchedArticle);
    return (
      <div>
        {this.props.searchedArticle ? (
          <div
            dangerouslySetInnerHTML={{ __html: this.props.searchedArticle }}
          ></div>
        ) : (
          <div>Sorry no data Found</div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSearch: () => {
      dispatch(getSearch({}));
    }
  };
};

const mapStateToProps = state => {
  return {
    searchedArticle: state.fetchSearchData.result,
    error: state.fetchSearchData.err
  };
};

const SearchComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);

export default SearchComponent;
