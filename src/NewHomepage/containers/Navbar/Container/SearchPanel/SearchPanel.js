import React from "react";
import { connect } from "react-redux";
import { getSearch } from "../../../../redux/actions/SeachAction/SearchAction";
import "./SearchPanel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { withRouter, Link } from "react-router-dom";

class SearchPanel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      openSearchPanel: true,
    };
  }

  onChangeHandler = (e) => {
    e.preventDefault();
    this.setState({ query: e.target.value });
  };

  // //getSearch Action called in this function.

  // handleSearch = (e) => {
  //   // this.props.getSearch(this.state.query);
  //   // let history = createBrowserHistory();
  //   // history.push(`/search/collection/results/?query=${this.state.query}`);
  //   this.props.history.push({
  //     pathname: `/search/`,
  //     search: `?query=${this.state.query}`,
  //   });
  //   // window.location.reload();
  // };
  render() {
    return (
      <div className="searchPanel_container">
        <div className="searchPanel_top">
          <div className="search_input-container flex-10 txt-lt">
            <input
              className="search_input"
              type="text"
              name="query"
              value={this.state.query}
              onChange={this.onChangeHandler}
              placeholder="Search topics, authors, and collections"
            />
            <Link
              to={{
                pathname: `/search/`,
                search: `query=${this.state.query}`,
              }}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <div className="close_search" onClick={this.props.handleOpenSearch}>
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     searchedArticle: state.fetchSearchData.result,
//     error: state.fetchSearchData.err
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     getSearch: query => {
//       dispatch(getSearch({ query: query }));
//     }
//   };
// };

export default withRouter(SearchPanel);
