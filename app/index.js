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

import { saveUserToken, checkUserAuth, fetchUser } from './actions/user';
import App from './containers/app';
import configureStore from './store/configure-store';
import 'es6-promise';

const store = configureStore({});
const history = syncHistoryWithStore(hashHistory, store);

store.dispatch(checkUserAuth());

window.onSignIn = function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var id_token = googleUser.getAuthResponse().id_token;

    store.dispatch(saveUserToken(id_token));
    store.dispatch(fetchUser());

    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

};

injectTapEventPlugin();

const customOptions = {
    palette: {
        primary1Color: orange500,
        primary2Color: pinkA200
    }
};
ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(customOptions)}>
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App} />
            </Router>
        </Provider>
    </MuiThemeProvider>, document.getElementById('app'));
