import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

export default class ArticleList extends Component{
    static propTypes = {
        articles: PropTypes.array
    };

    state = {
        openArticleId: null
    };

    render() {
        const { articles } = this.props;
        
        const articleElements = articles.map(article => <li key = {article.id}>
            <Article
                article = {article}
                isOpen = {article.id === this.state.openArticleId}
                toggleOpen = {this.toggleOpenArticle.bind(this, article.id)}
            /></li>);

        return (
            <ul>
                {articleElements}
            </ul>
        );
    }

    toggleOpenArticle(newId) {
        const { openArticleId } = this.state;

        if(newId === openArticleId)
            this.setState({ openArticleId: null });
        else
            this.setState({ openArticleId: newId });
    }
}