import React, { Suspense } from "react";
import "./main.css";
import LoadingCards from "../Pages/Homepage/Components/Cards/LoadingCards/LoadingCards";
import MagazineSection from "../Pages/Homepage/Container/MagazineSection/MagazineSection";
import Homepage from "../Pages/Homepage/Container/Homepage/Homepage";
import FeaturedSection from "../Pages/Homepage/Container/FeaturedSection/FeaturedSection";

class Main extends React.Component {
  render() {
    return (
      <main className="main_section">
        <React.Fragment>
          <MagazineSection />

          <Homepage />

          <div className="featuredSec_container">
            <FeaturedSection />
          </div>
        </React.Fragment>
      </main>
    );
  }
}

export default Main;
