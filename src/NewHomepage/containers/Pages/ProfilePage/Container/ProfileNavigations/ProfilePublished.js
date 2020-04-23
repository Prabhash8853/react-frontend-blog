import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as Utility from "../../../../../../utility/DateTitle/DateTitle";
import * as actions from "../../../../../redux/actions/ProfileActions/ProfileAction";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

const ProfilePublished = (props) => {
  useEffect(() => {
    const user = localStorage.getItem("usr_3000_v1");
    props.getProfilePublishedData(user);
  }, []);

  return (
    <div className="profileArticleContainer">
      {/* <Headings Heading="Articles" /> */}
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
  );
};

const mapStateToProps = (state) => {
  return {
    articleData: state.fetchProfileData.articleData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProfilePublishedData: (user) => {
      dispatch(actions.getProfilePublishedActions({ user: user }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePublished);
