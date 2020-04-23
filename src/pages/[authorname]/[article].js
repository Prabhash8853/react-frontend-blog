import { useRouter } from "next/router";
import Head from "next/head";

import ArticlesMain from "../../containers/ArticlePage/container/ArticlesMain/ArticlesMain";
import * as actions from "../../redux/actions/ArticleDetailsActions/ArticleDetailsActions";
import { connect } from "react-redux";

const Article = (props) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <meta name="og:title" content={props.articleData.title} />

        <meta
          property="og:description"
          content={props.articleData.description}
        />
        <meta property="og:url" content={router.asPath} />
        <meta name="og:image" content={props.articleData.get_cover_image} />
        <meta name="twitter:title" content={props.articleData.title} />
        <meta
          name="twitter:description"
          content={props.articleData.description}
        />
        <meta
          name="twitter:image"
          content={props.articleData.get_cover_image}
        />
        <meta name="twitter:card" content={router.asPath} />
      </Head>
      <ArticlesMain {...props} />
    </div>
  );
};

Article.getInitialProps = async ({ store, query, isServer }) => {
  const url = `api/collection-for-users/${query.authorname}/${query.article}`;
  const res = await store.dispatch(actions.fetchArticleDetails({ url: url }));

  return {
    res,
    isServer,
  };
};

const mapStateToProps = (state) => {
  return {
    articleData: state.fetchArticleDetails.ArticleDetailsData,
    loading: state.fetchArticleDetails.loading,
    error: state.fetchArticleDetails.error !== null,
    author: state.fetchArticleDetails.author,
    content: state.fetchArticleDetails.content,
    avatar: state.fetchArticleDetails.avatar,
    sub_category: state.fetchArticleDetails.sub_category,
    category: state.fetchArticleDetails.category,
    username: state.fetchArticleDetails.authorUsername,
  };
};

export default connect(mapStateToProps)(Article);
