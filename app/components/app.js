import React from 'react';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/RaisedButton';
import NotificationWidget from './../containers/notification-widget';
import { Link, hashHistory } from 'react-router';
import ProductList from './product-list';
import map from 'lodash/map';

export default React.createClass({
    name: 'App',

    render() {
        const { products, startCheckout } = this.props;

        return (
            <div>
                <AppBar
                    title="#Home24"
                />
                <ProductList products={products} onClick={startCheckout} />

                <NotificationWidget />

            </div>
        );
    }
})
