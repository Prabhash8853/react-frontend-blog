import React, { useEffect, useState, useRef } from "react";
import "../ProfileArticles/ProfileArticles.css";
import { connect } from "react-redux";
// import Headings from "../../../../../components/CommonComponents/Headings/Headings";
import * as Utility from "../../../../../../utility/DateTitle/DateTitle";
import * as actions from "../../../../../redux/actions/ProfileActions/ProfileAction";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { withRouter } from "react-router-dom";
import LoadingCards from "../../../Homepage/Components/Cards/LoadingCards/LoadingCards";

const PublicProfleArticles = (props) => {
  // const [Limit, setLimit] = useState(7);
  // const [Offset, setOffset] = useState(0);

  // const loadingRef = useRef();

  const {
    match: { params },
  } = props;

  // const handleObserver = (entities, observer) => {
  //   if (entities[0].intersectionRatio > 0) {
  //     console.log(entities);
  //     console.log(Offset);

  //     if (props.publicUserCount <= Offset) {
  //       setOffset(Offset + 7);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   props.getPublicProfileData(params.author, props.Publicprofile);
  // }, []);

  return (
    <React.Fragment>
      <div className="profileArticleContainer">
        {props.publicUserArticles.map((data, index) => {
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
                  articleURI={`/${data.get_share_url}`}
                  Publicprofile={props.Publicprofile}
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
                  articleURI={`/${data.get_share_url}`}
                  Publicprofile={props.Publicprofile}
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
    publicUserArticles: state.fetchProfileData.publicUserArticles,
    publicUserCount: state.fetchProfileData.publicUserCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // getPublicProfileData: (user, publicUser, Limit, Offset) => {
    //   dispatch(
    //     actions.getPublicProfileActions({
    //       user: user,
    //       publicUser: publicUser,
    //     })
    //   );
    // },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PublicProfleArticles));
