import React from "react";

import "./style.scss";


import noResult from "../../assets/no-results.png"
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const PageNotFound = () => {
    return (
        <div className="pageNotFound">
            <ContentWrapper>
                <div className="pagenot">   
                        <img src={noResult} alt="" />
                </div>
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
            </ContentWrapper>
        </div>
    );
};

export default PageNotFound;
