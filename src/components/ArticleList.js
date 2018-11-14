import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import OpenCloseLogic from '../decorators/openCloseLogic';

ArticleList.propTypes = {
    articles: PropTypes.array
};

function ArticleList({ articles, toggleOpenArticle, openArticleId }) {
    const articleElements = articles.map(article => <li key={article.id}>
        <Article
            article={article}
            isOpen={article.id === openArticleId}
            toggleOpen={toggleOpenArticle.bind(this, article.id)}
        /></li>);

    return (
        <ul>
            {articleElements}
        </ul>
    );
}

export default OpenCloseLogic(ArticleList);