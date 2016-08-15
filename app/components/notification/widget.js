import React from 'react';
import map from 'lodash/map';
import Snackbar from 'material-ui/Snackbar';

export default React.createClass({
    render() {
        return (
            <div>
                {map(this.props.notifications, (n, i) => {
                    return (
                        <Snackbar
                            key={i}
                            message={n.message}
                            open={true}
                            autoHideDuration={2000}
                        />
                    );
                })}
            </div>
        )
    }
})