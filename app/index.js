import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import {
    cyan500, cyan700,
    pinkA200,
    orange500,
    grey100, grey300, grey400, grey500,
    white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './containers/app';
import CheckoutConfirmation from './containers/pages/checkout-confirmation';
import configureStore from './store/configure-store';
import 'es6-promise';

const store = configureStore({});
const history = syncHistoryWithStore(hashHistory, store);

injectTapEventPlugin();

const customOptions = {
    palette: {
        primary1Color: orange500
    }
};
ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(customOptions)}>
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App} />
                <Route path="/checkout-confirmation" component={CheckoutConfirmation} />
            </Router>
        </Provider>
    </MuiThemeProvider>, document.getElementById('app'));
