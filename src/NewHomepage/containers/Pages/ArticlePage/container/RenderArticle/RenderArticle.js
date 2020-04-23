import React, { useEffect, useState, Fragment } from "react";
import parse from "html-react-parser";
import { connect } from "react-redux";
import * as action from "../../../../../redux/actions/ArticleDetailsActions/GetTagsActions";
import "./RenderArticle.css";
import Backdrop from "../../../../../components/CommonComponents/Backdrop/Backdrop";

const styleObj = {
  width: "100%",
  lineHeight: "2em",
  fontSize: "calc(12px + 0.3em)",
  textAlign: "justify",
};

const RenderArticle = (props) => {
  // const HTMLContent = props.articleContent;
  const [article, setArticle] = useState(props.articleContent);
  const [slideBox, setSlideBox] = useState(false);

  const displayTagLink = (e) => {
    // calling fetch tags link API
    props.callTagAPI(e.target.getAttribute("data-tag-id"));
    setSlideBox(true);

    setTimeout(() => {
      setSlideBox(false);
    }, 3000);
  };

  const getTagsLink = () => {
    const el = document.querySelectorAll("mark");

    for (var i = 0; i < el.length; i++) {
      el[i].addEventListener("mouseenter", displayTagLink);

      setSlideBox(false);
    }
  };

  const onEmbedClick = (link) => {
    window.open(link, "_blank");
  };

  const getEmbedsLink = () => {
    const embedsEl = document.querySelectorAll(".medium-insert-embeds");
    for (let i = 0; i < embedsEl.length; i++) {
      embedsEl[i].classList.add("embeds");
      const el = embedsEl[i].querySelectorAll(".link-src");
      console.log(el);
      for (let j = 0; j < el.length; j++) {
        if (el.length >= 1) {
          var EmbedLink = [];
          console.log(el[j]);
          EmbedLink[i] = el[j].textContent;
          console.log(el);
          embedsEl[i].addEventListener("click", function () {
            onEmbedClick(EmbedLink[i]);
          });
        }
      }
    }
  };

  const getImageTags = () => {
    const ImageEl = document.querySelectorAll("img");
    for (let i = 0; i < ImageEl; i++) {
      if (ImageEl[i]) {
        ImageEl[i].classList.add("cover-image");
      }
    }
  };

  useEffect(() => {
    getTagsLink();
    getImageTags();
    getEmbedsLink();
  }, [article]);

  return (
    <Fragment>
      <div className="article__content--data" style={styleObj}>
        {parse(article)}
      </div>
      <div className={slideBox ? "tag-link show" : undefined}>
        {props.doFollow ? (
          <div>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <a
              className="link-font"
              href={props.referenceLink}
              rel="dofollow"
              target="_blank"
            >
              {props.referenceLink}
            </a>
          </div>
        ) : (
          <div>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <a href={props.referenceLink} rel="nofollow" target="_blank">
              {props.referenceLink}
            </a>
          </div>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    referenceLink: state.getTagsReducer.referenceLink,
    name: state.getTagsReducer.name,
    description: state.getTagsReducer.description,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    callTagAPI: (DataId) => {
      dispatch(action.callTagAPIaction({ id: DataId }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RenderArticle);
