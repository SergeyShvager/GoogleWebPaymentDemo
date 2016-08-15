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


        return (
            <div>
                <AppBar
                    title="Checkout confirmation"
                />

                <Paper>

                    <table className="confirmation-page__details-table">
                        <tbody>
                            <tr>
                                <td>Payment type</td>
                                <td>{checkout.methodName}</td>
                            </tr>
                            <tr>
                                <td>Cardholder name</td>
                                <td>{checkout.details.cardholderName}</td>
                            </tr>
                            <tr>
                                <td>Card number</td>
                                <td>{checkout.details.cardNumber}</td>
                            </tr>
                            <tr>
                                <td>Card expire</td>
                                <td>{`${checkout.details.expiryMonth}/${checkout.details.expiryYear}`}</td>
                            </tr>
                            <tr>
                                <td>Cardholder name</td>
                                <td>{checkout.details.cardholderName}</td>
                            </tr>
                        </tbody>
                    </table>

                </Paper>
                <NotificationWidget />

            </div>
        );
    }
})
