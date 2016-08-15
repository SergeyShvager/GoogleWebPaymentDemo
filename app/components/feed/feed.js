import React from 'react';
import Post from './post';
import isEmpty from 'lodash/isEmpty';

import CircularProgress from 'material-ui/CircularProgress';

export default React.createClass({
    componentDidMount() {

        if (!this.props.feed.isLoaded) {
            this.props.fetchFeed();
        }
    },
    render() {
        const { feed } = this.props;

        if (feed.isFetching) {
            return <CircularProgress style={{marginRight: 'auto', marginLeft: 'auto', display: 'block'}} />;
        }

        if (!feed.isLoaded || isEmpty(feed.feed.posts)) {
            return <div>Empty</div>;
        }

        return (
            <div>
                {feed.feed.posts.map((post, i) => <Post key={i} post={post} /> )}
            </div>
        );
    }
})