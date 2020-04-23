import React, { useState } from "react";
import "./Scholarship.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Prompts = [
  {
    question: "How to be happy",
    answer:
      " If you had to teach someone else how to be happy, what would you tell them? You can explain it any way you’d like, whether that be recommendations, life changes, simple ideas - there’s no limit to what advice you can provide."
  },
  {
    question: " How to make friends",
    answer:
      "Imagine you’re talking with someone who struggles to make friends. Would you tell them? What’s worked well for you in the past. Give us an explanation around what you would tell somebody on how to make friends."
  },
  {
    question: "How does AirBnb Work",
    answer:
      "Have you ever used Airbnb? How would you explain it to someone who’s never used it before? And what are some of your best experiences with the service?"
  },
  {
    question: "How to deal with loneliness",
    answer:
      "Have you ever had a time where you’ve had to deal with loneliness? How did you learn to deal with it, or what helped you overcome it? Tell us about what you would recommend for someone dealing with it right now"
  },
  {
    question: "What is Tik Tok App?",
    answer:
      "answ The new app/social media platform has taken the world by storm, but there are many who still don’t understand it. How would you explain it to someone who’s never used it? What are some recommendations you would give them?"
  },
  {
    question: " How to Make Money on Amazon",
    answer:
      "Have you sold a product on Amazon, or maybe know somebody who has? What would you tell someone who’s looking to make money on Amazon? Give us your suggestions, whether that be techniques, marketing strategies, products you should sell - there’s no limit to what you can advise."
  }
];

const Scholarship = props => {
  const [modal, setmodal] = useState(false);
  const [modalAnswer, setModalAnswer] = useState("");
  const [modalQuestion, setmodalQuestion] = useState("");

  const handleAlert = data => {
    setmodal(true);
    setModalAnswer(data.answer);
    setmodalQuestion(data.question);
  };

  const renderElement = (item, index) => {
    return (
      <li
        key={index}
        className="prompts_list--item"
        onClick={() => handleAlert(item)}
      >
        {item.question}
      </li>
    );
  };

  const handleCloseBackdrop = () => {
    setmodal(false);
  };
  return (
    <React.Fragment>
      <div className="hero-section">
        <div className="hero-content">
          <h1>The Vigyaa Scholarship</h1>
        </div>
      </div>
      <div className="scholar-content-wrap">
        <div className="scholar-content">
          <p>
            Stories are powerful. At Vigyaa, we deeply believe that. We are an
            online publishing platform that allows people to create and share
            stories meant to inspire. The articles on Vigyaa reach a global
            market, and they encourage that audience to think in new ways.
          </p>
          <p>
            Our scholarship program is designed to create thought-provoking
            articles for the global audience. We invite you to participate and
            share an inspiring, creative story of your own.
          </p>
          <h2>Eligibility Requirements</h2>
          <p>Applicants must be:</p>
          <ul>
            <li>
              Enrolled or accepted into an accredited 2- or 4-year undergraduate
              program in the U.S. or Canada
            </li>
            <li>Students may be in high school or in college</li>
          </ul>
          <p>
            Note: Only one submission is permitted per applicant. Previous
            winners will not be able to enter again.
          </p>
        </div>
      </div>
      <div className="scholar-content-wrap grey-bg angle-bg-top">
        <div className="scholar-content">
          <h2>How to Enter</h2>
          <p>To enter, students must: </p>
          <ul>
            <li>Create an account on Vigyaa</li>
            <li>Write and post an article on Vigyaa</li>

            <ul>
              <li>
                The article must follow one of the prompts below. It must also
                include a title and a minimum of 700 words
              </li>
            </ul>

            <li>
              Send an email to{" "}
              <a
                href="mailto: scholarship@vigyaa.com"
                className="vigyaa-help_email"
              >
                scholarship@vigyaa.com
              </a>
              , including
            </li>

            <ul>
              <li>Student’s full name</li>
              <li>Name of undergraduate program they will be attending</li>
              <li>Live link to the published Vigyaa article</li>
            </ul>
          </ul>
        </div>
      </div>
      <div className="scholar-content-wrap green-bg">
        <div className="scholar-content">
          <h2>Submission Deadline</h2>
          <p>This is a biannual scholarship with two submission deadlines:</p>
          <p>
            <b>July 1 at 11: 59 p.m. EST</b>
          </p>
          <p>
            <b>December 1 at 11:59 p.m. EST</b>
          </p>
          <p>
            Applications open on the day following the submission deadlines
            (July 2 and Dec. 2).
          </p>
        </div>
      </div>
      <div className="scholar-content-wrap grey-bg angle-bg-bottom">
        <div className="scholar-content">
          <h2>Selection Process and Notification</h2>
          <h3>Scholarship Rules</h3>
          <p>
            The funds from the scholarship may only be used for tuition, books,
            university fees, or costs directly associated with study abroad
            programs and/or exchange student programs.
          </p>
          <h3>Prompts</h3>
          <p>
            <strong>
              Please select one of the prompts below to write about for your
              submission.
            </strong>{" "}
            The article should be a minimum of 700 words. Plagiarism will not be
            tolerated. Promote on your social media handles/Quora/Reddit, to get
            more views.
          </p>
          <ul>{Prompts.map((data, index) => renderElement(data, index))}</ul>
        </div>
      </div>

      <div className="scholar-content-wrap wd-80">
        <div className="scholar-content">
          <h2>Scholarship Criteria:</h2>
          <p>
            Scholarship will be awarded bi-annually to the (one) applicant per
            period who has the submitted article with the most views amongst
            scholarship entries. The winner will be chosen at the scholarship
            submission deadline (July 1 and December 1 at 11:59pm EST).
            Applicants are permitted to use whichever form of outreach they see
            fit to gain page views of their submissions. Winners will be
            contacted via email within 72 hours following the submission
            deadline.
          </p>
        </div>
      </div>

      <div className="scholar-content-wrap">
        <div className="scholar-content">
          <h3 style={{ textAlign: "center" }}>
            If you have any questions about the scholarship or the application
            process, please contact{" "}
            <span>
              <a
                href="mailto: scholarshipquery@vigyaa.com"
                className="vigyaa-help_email"
              >
                scholarshipquery@vigyaa.com
              </a>
            </span>
          </h3>
        </div>
      </div>
      {modal && (
        <div className="prompts_modal">
          <h2>{modalQuestion}</h2>
          <p>{modalAnswer}</p>
          <span className="span_close" onClick={handleCloseBackdrop}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
      )}
      {modal && (
        <div
          className="backdrop_scholarship"
          onClick={handleCloseBackdrop}
        ></div>
      )}
    </React.Fragment>
  );
};

export default Scholarship;
