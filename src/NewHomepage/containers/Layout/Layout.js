import * as React from "react";
import Main from "../Main/Main";
import Media from "react-media";

import MobileLayout from "../../../MobileView/MobileContainer/MobileLayout/MobileLayout";
import NavbarNew from "../Navbar/NavbarNew";
import { Helmet } from "react-helmet";


class Layout extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
      <Helmet>
        <meta property="fb:app_id" content="1611415982497477" />
        <meta name="twitter:site" content="vigyaa" />
        <meta
          name="ahrefs-site-verification"
          content="fa6e22a8b1c231083afc5bfe78046f8617984d88e218cfd026370a6414ce7849"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vigyaa.com/" />
        <meta
          property="og:title"
          content="Vigyaa - User Generated Content That Enhances Knowledge | Best Content Publishing Network"
        />
        <meta
          property="og:description"
          content="Vigyaa is the best Place to discover & create original, in-depth, useful, media-rich articles on topics you are passionate about. Topics like Health, Lifestyle, Technology, and Travel, etc."
        />
        <meta
          property="og:image"
          content="https://vigyaa.com/static/img/logo.png"
        />
        <meta
          name="page-topic"
          content="User generated articles that enhance knowledge"
        />
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:width" content="1200" />
        <meta name="coverage" content="Worldwide" />
        <meta name="allow-search" content="yes" />
        <meta
          name="p:domain_verify"
          content="a3ae6ea8f0dc5ebb2b29202d2e6289cf"
        />
        <meta
          name="twitter:image"
          content="https://vigyaa.com/static/img/logo.png"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <meta
          name="google-site-verification"
          content="VhDonaO0tFnj9nkVXBr8ZE1dsOlDtocrg6EyvZPNRTE"
        />
        <meta name="author" content="Kunal Kumar kushwaha" />
        <meta property="og:site_name" content="vigyaa" />

        <meta name="twitter:title" content='Vigyaa - User Generated Content That Enhances Knowledge | Best Content Publishing Network' />
        <meta
          name="twitter:description"
          content='Vigyaa is the best Place to discover & create original, in-depth, useful, media-rich articles on topics you are passionate about. Topics like Health, Lifestyle, Technology, and Travel, etc.'
        />
        <meta name="twitter:card" content={window.location.href} />
      </Helmet>
      <Media query="(max-width: 968px)">
        {(matches) =>
          matches ? (
            <MobileLayout {...this.props} />
          ) : (
            <React.Fragment>
              <NavbarNew isAuthenticate={this.props.isAuthenticate} />
              <Main />
            </React.Fragment>
          )
        }
      </Media>
      </React.Fragment>
    );
  }
}

export default Layout;
