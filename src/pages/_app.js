import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { initStore } from "../redux";

export default withRedux(initStore, { debug: true })(
  class MyApp extends App {
    // static async getInitialProps({ Component, ctx }) {
    //   return {
    //     pageProps: {
    //       ...(Component.getInitialProps
    //         ? await Component.getInitialProps(ctx)
    //         : {}),
    //     },
    //   };
    // }

    render() {
      const { Component, pageProps, store } = this.props;

      return (
        <Provider store={store}>
          <Component {...pageProps} />
          <style jsx global>{`
            @import url("https://fonts.googleapis.com/css?family=Inter:300,400,500,600,800&display=swap");

            * {
              box-sizing: border-box;
            }

            html,
            body {
              height: 100%;
            }

            body {
              font-family: "Inter", sans-serif !important;
              font-size: 16px;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }

            .cmn-margin-tp {
              margin-top: 1rem;
            }

            .data-margin {
              margin-top: 10px;
            }

            .data-margin-main {
              margin-top: 2rem;
            }

            .card {
              border-radius: 5px;
              margin: 0px 10px;
            }

            img {
              object-fit: cover;
            }

            .Ads {
              margin-top: 20px;
            }

            a {
              text-decoration: none !important;
              color: inherit !important;
            }

            .z-0 {
              z-index: 0;
            }

            .flex-10 {
              flex: 1;
            }

            .flex-1 {
              flex: 0.1;
            }

            .card {
              border-radius: 5px;
              margin: 0px 10px;
            }

            .flex-2 {
              flex: 0.2;
            }

            .flex-3 {
              flex: 0.3;
            }

            .flex-4 {
              flex: 0.4;
            }

            .flex-5 {
              flex: 0.5;
            }

            .flex-6 {
              flex: 0.6;
            }

            .flex-7 {
              flex: 0.7;
            }

            .flex-8 {
              flex: 0.8;
            }

            .flex-9 {
              flex: 0.9;
            }

            .mg-10 {
              margin: 10px 0px;
            }

            .pd-10 {
              padding: 10px;
            }

            .wd-100 {
              width: 100%;
            }

            .text-bold {
              font-weight: 700;
            }

            .login_container_moto {
              font-size: calc(14px + 0.2vw);
              font-weight: 700;
            }

            .txt-cntr {
              text-align: center !important;
            }

            .txt-rt {
              text-align: right !important;
            }

            .txt-lt {
              text-align: left !important;
            }

            .mg-tp50 {
              margin-top: 50px;
            }

            .mg-tp20 {
              margin-top: 20px;
            }

            .fnt-700 {
              font-weight: 700;
            }
          `}</style>
        </Provider>
      );
    }
  }
);
