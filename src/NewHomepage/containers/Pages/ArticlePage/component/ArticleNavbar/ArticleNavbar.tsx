import React from 'react';
import './ArticleNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
type ArticleNavbarProps = {}

const ArticleNavbar = ( props: ArticleNavbarProps ):JSX.Element => {
    return(
        <>
            <div className = "article_nav_container">
                <div className = "artcl_nav">
                    <div className = "artcle_nav_arrow flex-1">
                        <FontAwesomeIcon className="color-backIcon" icon = {faArrowLeft}/>
                    </div>
                    <div className = "artcle_nav_logo flex-5">
                        <img src = "/static/img/vigyaa-logo-home.svg" alt = "logo"/>
                    </div>
                    <div className = "artcle_nav_writing flex-4">
                        Start writing
                    </div>
                </div>
            </div>
        </>
    );
}

export default ArticleNavbar;