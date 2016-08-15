import React from 'react';
import CircleProgress from 'material-ui/CircularProgress';
export default React.createClass({
    render() {
        return (
            <div>
                <CircleProgress />
                <h3>User loading...</h3>
            </div>
        );
    }
});