import React from 'react';

import Paper from 'material-ui/Paper';

import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/RaisedButton';
import NotificationWidget from './../containers/notification-widget';
import { Link, hashHistory } from 'react-router';

import map from 'lodash/map';

import TextField from 'material-ui/TextField';

export default React.createClass({
    name: 'CheckoutConfirmation',

    render() {
        const { startCheckout, checkout } = this.props;
        const style = {
          marginLeft: 20
        };

        return (
            <div>
                <AppBar
                    title="Checkout confirmation"
                />

                <Paper>

                <table>
                <tbody>
                <tr>
                <td>Payment type</td>
                <td>{checkout.methodName}</td>
                </tr>
                </tbody>
                </table>

                </Paper>
                <NotificationWidget />

            </div>
        );
    }
})
