import React from 'react';

import Paper from 'material-ui/Paper';

import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/RaisedButton';
import NotificationWidget from './../containers/notification-widget';
import { Link, hashHistory } from 'react-router';

import _get from 'lodash/get';

import TextField from 'material-ui/TextField';

export default React.createClass({
    name: 'CheckoutConfirmation',

    render() {
        const { checkout } = this.props;

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
                                <td>{_get(checkout, 'methodName')}</td>
                            </tr>
                            <tr>
                                <td>Cardholder name</td>
                                <td>{_get(checkout, 'details.cardholderName')}</td>
                            </tr>
                            <tr>
                                <td>Card number</td>
                                <td>{_get(checkout, 'details.cardNumber')}</td>
                            </tr>
                            <tr>
                                <td>Card expire</td>
                                <td>{`${_get(checkout, 'details.expiryMonth')}/${_get(checkout, 'details.expiryYear')}`}</td>
                            </tr>
                            <tr>
                                <td>Recipient</td>
                                <td>{_get(checkout, 'details.billingAddress.recipient')}</td>
                            </tr>
                            <tr>
                                <td>Billing address</td>
                                <td>{`${_get(checkout, 'details.billingAddress.addressLine', []).join()}, ${_get(checkout, 'details.billingAddress.postalCode')}, ${_get(checkout, 'details.billingAddress.city')}`}</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>{_get(checkout, 'details.billingAddress.phone')}</td>
                            </tr>
                            <tr>
                                <td>Shipping address</td>
                                <td>{`${_get(checkout, 'shippingAddress.addressLine', []).join()}, ${_get(checkout, 'shippingAddress.postalCode')}, ${_get(checkout, 'shippingAddress.city')}`}</td>
                            </tr>
                            <tr>
                                <td>Payer Email</td>
                                <td>{_get(checkout, 'payerEmail')}</td>
                            </tr>
                            <tr>
                                <td>Payer Phone</td>
                                <td>{_get(checkout, 'payerPhone')}</td>
                            </tr>
                        </tbody>
                    </table>

                </Paper>
                <NotificationWidget />

            </div>
        );
    }
})
