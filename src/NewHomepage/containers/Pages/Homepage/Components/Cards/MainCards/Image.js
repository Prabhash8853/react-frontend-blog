import React from "react";
import * as Utility from "../../../../../../../utility/DateTitle/DateTitle";
import "./MainCards.css";
import Media from "react-media";

const Image = (props) => {
  return (
    <Media query="(max-width: 968px)">
      {(matches) =>
        matches ? (
          <img
            className={
              props.profile
                ? "main_card-img-top profile-card-imgtop"
                : "main_card-img-top"
            }
            src={Utility.handleImage(props.ImageSrc)}
            alt="Article Card image"
            height="175"
            srcSet={`${Utility.handleImage(props.ImageSrc)},
                ${props.ImageSrc}`}
          />
        ) : (
          <img
            className={
              props.profile
                ? "main_card-img-top profile-card-imgtop"
                : "main_card-img-top"
            }
            src={props.ImageSrc}
            alt="Article Card image"
            height="175"
            srcSet={`${props.ImageSrc},
                ${props.ImageSrc}`}
          />
        )
      }
    </Media>
  );
};

export default Image;
