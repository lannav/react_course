import React, { Component } from 'react';

export default (OriginalComponent) => class WrappedComponent extends Component {
    state = {
        openArticleId: null
    };

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle} />;
    }

    toggleOpenArticle = (newId) => {
        const { openArticleId } = this.state;

        if(newId === openArticleId)
            this.setState({ openArticleId: null });
        else
            this.setState({ openArticleId: newId });
    }
}