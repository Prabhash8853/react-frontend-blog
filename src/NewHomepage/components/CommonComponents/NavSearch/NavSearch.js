import * as React from "react";
import { connect } from "react-redux";
// import { Link, Redirect } from 'react-router-dom';
import "./NavSearch.css";
import { getSearch } from "../../../redux/actions/SeachAction/SearchAction";
import { createBrowserHistory } from "history";

class NavSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchValue: ""
    };
  }

  onChangeHandler = e => {
    e.preventDefault();
    this.setState({ SearchValue: e.target.value });
  };

  handleSearch = e => {
    e.preventDefault();
    this.props.getSearch(this.state.SearchValue);
    let history = createBrowserHistory();
    var query = this.state.SearchValue;
    history.push(`/search/collection/results/?query=${query}`);
    window.location.reload();
  };

  render() {
    // var url = `/search/collection/results/?query=${this.state.SearchValue}`
    return (
      <div className="navSearch-input">
        <form onSubmit={this.handleSearch}>
          <img
            onClick={this.handleSearch}
            className="srch"
            src="/static/img/icon-search-home.svg"
          />
          <input
            type="text"
            name="SearchValue"
            value={this.state.SearchValue}
            onChange={this.onChangeHandler}
            placeholder="Search topics, authors, and collections"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchedArticle: state.fetchSearchData.result,
    error: state.fetchSearchData.err
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSearch: SearchValue => {
      dispatch(getSearch({ query: SearchValue }));
    }
  };
};

const NavSearchComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavSearch);

export default NavSearchComponent;
