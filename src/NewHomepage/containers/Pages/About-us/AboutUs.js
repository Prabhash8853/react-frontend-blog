import React, { useState, useRef } from "react";
import "./AboutUs.css";
import NavbarNew from "../../Navbar/NavbarNew";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slide from "./components/Slide";
import RightArrow from "./components/RightArrow";
import LeftArrow from "./components/LeftArrow";

class AboutUs extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
      ],
      currentIndex: 0,
      translateValue: 0
    };
  }

  goToPrevSlide = () => {};

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    // return document.querySelector(".slide").clientWidth;
  };

  render() {
    return (
      <div className="about_us_container">
        <NavbarNew isAuthenticate={this.props.isAuthenticate} />
        <div className="about_us_section">
          <div className="about_us_tp">
            <h1>About Us</h1>
            <div className="about_us_social_media">
              <ul className="about_us_social-ul">
                <li>
                  <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                </li>
                <li>
                  <FontAwesomeIcon icon={["fab", "twitter"]} />
                </li>
                <li>
                  <FontAwesomeIcon icon={["fab", "google"]} />
                </li>
                <li>
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </li>
              </ul>
            </div>
          </div>

          <div className="below_header">
            <div className="who_are_we flex-5">
              <h1 className="about-us-heading">Who Are We ?</h1>
              <div className="who_r_we_text">
                <p className="about-us_para">
                  Everyone has a story to tell and an experience to share!
                  Vigyaa is an online platform for bloggers and authors to
                  publish their articles and stories to a mass global market.
                  Founded by Jitin Tuli and Gaurav Goel, their passion for story
                  telling has allowed them to reach the creative minds of
                  bloggers and authors around the globe and bring their stories
                  to passionate online readers. Vigyaa's core is centered on
                  evolving ideas through knowledge. As a hub focused on the
                  power of storytelling, we thrive on real world accounts of
                  global events. Our content spans across several culturally
                  relevant and universally advanced topics. We invite you to
                  share your story, your experience and expertise with us and
                  engage in conversations that matter. Connect with the world
                  and let everybody know what you think. Become a writer -
                  because your story is the most powerful way to inspire
                  millions of people along their journey and help them to branch
                  out beyond the world they know.
                </p>
              </div>
            </div>
            <div className="mobile_img flex-4 txt-rt">
              <img src="/static/img/mobile.svg" alt="ui" />
            </div>
          </div>

          <div className="our_story pd-mg">
            <h1 className="about-us-heading our_storyHead">Our Story</h1>
            <div className="our_story_text">
              <p className="about-us_para">
                Vigyaa is a platform that was created to highlight ideas that
                make us think. As thought leaders we invite bloggers and authors
                to challenge their audiences with provoking articles that will
                create buzzing topics among your very own Vigyaa audience. We
                are looking for articles that solve problems rather than get
                caught in the problems. Articles that deliver inspirational
                stories and give people hope, allowing them to question their
                ability to become better individuals through consuming our
                provoking article content. We encourage fun, playful and crazy
                entertaining stories that are centered on making us think. Think
                thoughts that actually take us forward in a human race. At
                Vigyaa you will find articles ranging from technology, to
                lifestyle, to business strategy and on society. We carefully
                curate articles written by famous writers and authors and serve
                to you in our own unique manner. Anyone can upload their
                articles on Vigyaa. Front page articles are then chosen by our
                editorial team. The cooler your thoughts, the better your ideas,
                the more likely you are to land on the front page.
              </p>
            </div>
          </div>

          <div className="author_view pd-mg">
            <h1 className="about-us-heading">Author's View</h1>

            <div className="slider" id="sliderRef">
              <div
                className="slider-wrapper"
                style={{
                  transform: `translateX(${this.state.translateValue}px)`,
                  transition: "transform ease-out 0.45s"
                }}
              >
                {this.state.images.map((image, i) => (
                  <Slide key={i} image={image} />
                ))}
              </div>
              <LeftArrow goToPrevSlide={this.goToPrevSlide} />
              <RightArrow goToNextSlide={this.goToNextSlide} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
