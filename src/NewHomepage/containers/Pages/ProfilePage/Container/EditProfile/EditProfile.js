import React, { useState, useEffect } from "react";
import "./EditProfile.css";
import { connect } from "react-redux";
// import Navbar from "../../../../Navbar/Navbar";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import FormInput from "../../../../../components/CommonComponents/FormInput/FormInput";
import ProfileEditHeader from "../../components/ProfileEditHeader/ProfileEditHeader";
import HeadingName from "../../../Homepage/Components/HeadingName/HeadingName";
import NavbarNew from "../../../../Navbar/NavbarNew";
import * as actions from "../../../../../redux/actions/ProfileActions/ProfileAction";
import Buttons from "../../../../../components/CommonComponents/Buttons/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { Redirect } from "react-router";

const EditProfile = (props) => {
  const [firstName, setfirstName] = useState(props.userData.first_name);
  const [lastName, setlastName] = useState(props.userData.last_name);
  const [bio, setBio] = useState(
    props.userData.short_bio !== null ? props.userData.short_bio : ""
  );
  const [facebookURL, setfacebookURL] = useState(
    props.userData.facebook === null ? "" : props.userData.facebook
  );
  const [twitterURL, settwitterURL] = useState(
    props.userData.twiiter !== null ? props.userData.twiiter : ""
  );
  const [LinkedinURL, setLinkedinURL] = useState(
    props.userData.linkedin !== null ? props.userData.linkedin : ""
  );
  const [webURL, setwebURL] = useState(
    props.userData.web !== null ? props.userData.web : ""
  );
  const [id, setId] = useState(props.userData.id);
  const [imageUpload, setImageUpload] = useState();
  const [imageValue, setImageValue] = useState(props.userData.avatar);

  useEffect(() => {
    if (!props.isAuthenticate) return <Redirect to="/login" />;

    const user = localStorage.getItem("usr_3000_v1");
    props.getProfileData(user);
    return () => {
      props.getProfileData(user);
    };
  }, []);

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setfirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setlastName(e.target.value);
  };
  const handleFacebookChange = (e) => {
    setfacebookURL(e.target.value);
  };
  const handleTwitterChange = (e) => {
    settwitterURL(e.target.value);
  };
  const handleLinkedinChange = (e) => {
    setLinkedinURL(e.target.value);
  };
  const handleWebChange = (e) => {
    setwebURL(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.postProfileData(
      id,
      imageUpload,
      firstName,
      lastName,
      facebookURL,
      twitterURL,
      LinkedinURL,
      webURL,
      bio
    );
  };

  const handleEditImage = (event) => {
    console.log(event.target.files[0]);
    const imageUrl = URL.createObjectURL(event.target.files[0]);
    setImageUpload(event.target.files[0]);
    setImageValue(imageUrl);
  };
  console.log(imageValue);

  const handleRemoveImage = () => {
    setImageValue(props.userData.avatar);
  };

  let displayElement;
  if (props.isAuthenticate) {
    displayElement = (
      <React.Fragment>
        <div className="profileEdit_container">
          <NavbarNew isAuthenticate={props.isAuthenticate} />
          <HeadingName headingName="Edit Profile" />
          <form method="submit" onSubmit={(event) => handleSubmit(event)}>
            <div className="profile_edit-details">
              <div className="profile_edit-image">
                <ProfileImage src={imageValue}>
                  <div className="image_edit profile_edit">
                    <FontAwesomeIcon
                      className="profile_edit_icon"
                      icon={faUserEdit}
                    />
                    <input
                      type="file"
                      name="file"
                      className="imageUploader"
                      onChange={() => handleEditImage()}
                    />
                  </div>
                </ProfileImage>
                <p
                  className="mg-10 mg-tp50"
                  style={{ color: "#BE5858" }}
                  onClick={handleRemoveImage}
                >
                  Remove Image
                </p>{" "}
                <p
                  className="mg-10 mg-tp20"
                  style={{ color: "#BE5858" }}
                  onClick={() => handleSubmit()}
                >
                  Save Image
                </p>
              </div>
              <div className="profile_inputBlock">
                <div className="profile_edit_grid">
                  <div className="profile_inputContainer grid-full-col">
                    <ProfileEditHeader HeaderName="Basic Info" />
                  </div>
                  <div className=" grid-half-col">
                    <label htmlFor="FirstName" className="profile_label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="profileEdit_input inputclass"
                      name="firstName"
                      onChange={(event) => handleFirstNameChange(event)}
                      value={firstName}
                    />
                  </div>

                  <div className=" grid-half-col">
                    <label htmlFor="LastName" className="profile_label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="profileEdit_input inputclass"
                      name="lastName"
                      onChange={(event) => handleLastNameChange(event)}
                      value={lastName}
                    />
                  </div>

                  <div className="profile_inputContainer grid-full-col mg-tp50">
                    <ProfileEditHeader HeaderName="Bio" />
                  </div>
                  <div className=" grid-full-col">
                    <label htmlFor="Bio" className="profile_label">
                      Bio
                    </label>
                    <input
                      type="text"
                      className="profileEdit_input inputclass"
                      name="bio"
                      onChange={(event) => handleBioChange(event)}
                      value={bio}
                    />
                  </div>

                  <div className="profile_inputContainer grid-full-col mg-tp50">
                    <ProfileEditHeader HeaderName="Social Links" />
                  </div>
                  <div className=" grid-full-col">
                    <label htmlFor="facebookURL" className="profile_label">
                      Facebook URL
                    </label>
                    <input
                      type="text"
                      className="profileEdit_input inputclass"
                      name="facebookURL"
                      onChange={(event) => handleFacebookChange(event)}
                      value={facebookURL}
                    />
                  </div>

                  {/* <div className=" grid-full-col">
                <label htmlFor="twitterURL" className="profile_label">
                  Twitter URL
                </label>
                <input
                  type="text"
                  className="profileEdit_input inputclass"
                  name="twitterURL"
                  onChange={event => handleTwitterChange(event)}
                  value={twitterURL}
                />
              </div> */}

                  <div className=" grid-full-col">
                    <label htmlFor="LinkedinURL" className="profile_label">
                      Linkedin URL
                    </label>
                    <input
                      type="text"
                      className="profileEdit_input inputclass"
                      name="linkedinURL"
                      onChange={(event) => handleLinkedinChange(event)}
                      value={LinkedinURL}
                    />
                  </div>
                  {/* <div className=" grid-full-col">
                <label htmlFor="WebURL" className="profile_label">
                  Web URL
                </label>
                <input
                  type="text"
                  className="profileEdit_input inputclass"
                  name="webURL"
                  onChange={event => handleWebChange(event)}
                  value={webURL}
                />
              </div> */}
                </div>
              </div>
            </div>
            <Buttons
              btnName="Save Profile"
              click={() => handleSubmit()}
              className="edit_profile_saveBtn"
            />
          </form>
        </div>
      </React.Fragment>
    );
  } else {
    displayElement = <Redirect to="/login" />;
  }

  return <React.Fragment>{displayElement}</React.Fragment>;
};

const mapStateToProps = (state) => {
  return {
    userData: state.fetchProfileData.userData,
    error: state.fetchProfileData.error,
    count: state.fetchProfileData.count,
    articleData: state.fetchProfileData.articleData,
    loading: state.fetchProfileData.loading,
    postResponse: state.fetchProfileData.postResponse,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProfileData: (user) => {
      dispatch(actions.getProfileActions({ user: user }));
    },
    postProfileData: (
      id,
      image,
      firstName,
      lastName,
      bio,
      facebookURL,
      twitterURL,
      LinkedinURL,
      webURL
    ) => {
      dispatch(
        actions.postProfileChangeAction({
          id: id,
          image: image,
          firstName: firstName,

          lastName: lastName,
          bio: bio,
          facebookURL: facebookURL,
          twitterURL: twitterURL,
          LinkedinURL: LinkedinURL,
          webURL: webURL,
        })
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
