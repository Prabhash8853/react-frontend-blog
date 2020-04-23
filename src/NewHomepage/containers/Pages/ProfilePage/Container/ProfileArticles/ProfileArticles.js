import React, { useEffect } from "react";
import "./ProfileArticles.css";
import { connect } from "react-redux";

import * as Utility from "../../../../../../utility/DateTitle/DateTitle";
import * as actions from "../../../../../redux/actions/ProfileActions/ProfileAction";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

const ProfileArticles = (props) => {
  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <div className="profileArticleContainer">
        {props.articleData.map((data, index) => {
          return (
            <React.Fragment>
              {data.get_cover_image.length === 0 ||
              data.get_cover_image === null ? (
                <ProfileCard
                  CoverImage={data.get_cover_image}
                  key={index}
                  image={false}
                  articleLink={`${data.get_share_url}`}
                  search={data.uuid_field}
                  Title={data.title}
                  Content={Utility.handleDescription(data.description)}
                  articleURI={data.get_share_url}
                  EditArticle
                />
              ) : (
                <ProfileCard
                  CoverImage={data.get_cover_image}
                  key={index}
                  image={true}
                  Title={data.title}
                  articleLink={`${data.get_share_url}`}
                  search={data.uuid_field}
                  Content={Utility.handleDescription(data.description)}
                  articleURI={data.get_share_url}
                  EditArticle
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    articleData: state.fetchProfileData.articleData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProfileData: (user_id) => {
      dispatch(actions.getProfileActions({ user_id: user_id }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileArticles);
