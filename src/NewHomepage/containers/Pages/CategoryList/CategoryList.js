import React, { useState, useEffect } from "react";
import "./Category.css";
import { connect } from "react-redux";
import NavbarNew from "../../Navbar/NavbarNew";
import * as actions from "../../../redux/actions/CategoryListActions/CategoryListActions";
import { withRouter, Link } from "react-router-dom";

const CategoryList = (props) => {
  // const [height, setHeight] = useState("0");
  // const [style, setStyle] = useState({
  //   height: "0",
  //   backgroundColor: "red",
  //   color: "white"
  // });

  useEffect(() => {
    props.getcategoryData();
    return () => {
      props.getcategoryData();
    };
  }, []);

  // const handleShowCategory = id => {
  //   props.history.push({
  //     pathname: `/category-list/${id}`
  //   });
  // };

  let displayElement = [];
  for (var key in props.categoryData) {
    if (props.categoryData.hasOwnProperty(key)) {
      console.log(props.categoryData[key].id);

      displayElement[key] = (
        <Link to={`/category-list/${props.categoryData[key].id}`}>
          <div className="card_list" key={key}>
            <div className="card_list_content">
              <div className="card_content_initials">
                <div className="content_initial_block">
                  {props.categoryData[key].name.slice(0, 1)}
                </div>
              </div>
              <div className="card_content">
                <h4 className="category_name">
                  {" "}
                  {props.categoryData[key].name}
                </h4>
              </div>
            </div>
          </div>
        </Link>
      );
    }
  }

  return (
    <div className="container-fluid">
      <NavbarNew isAuthenticate={props.isAuthenticate} />
      <div className="category_header">
        <h1 className="category_heading_name">categories</h1>
      </div>

      <div className="container">
        <div className="category_cards">{displayElement}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.fetchCategoryListReducer.loading,
    error: state.fetchCategoryListReducer.error,
    categoryData: state.fetchCategoryListReducer.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getcategoryData: () => {
      dispatch(actions.CategoryListActions());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CategoryList));
