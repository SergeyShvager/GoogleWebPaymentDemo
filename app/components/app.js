import React from 'react';
import Feed from './feed/feed';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/RaisedButton';
import NotificationWidget from './../containers/notification-widget';
import AuthView from './user/auth';
import UserPreloader from './user/preloader';
import { Link, hashHistory } from 'react-router';
import ProductList from './product-list';
import map from 'lodash/map';

export default React.createClass({
    name: 'App',

    render() {
        return (
            <div>
                <AppBar
                    title="Demo"
                />
                <ProductList />

                <NotificationWidget />

            </div>
        );
    }
})
