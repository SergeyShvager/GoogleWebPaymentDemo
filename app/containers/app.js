import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/app';

import { fetchFeed } from '../actions/feed';
import { startCheckout } from '../actions/checkout';
import { checkUserAuth } from '../actions/user';

import appSelector from './../selectors/app';


const mapDispatchToProps = (dispatch) => (bindActionCreators({
    fetchFeed,
    startCheckout
}, dispatch));

export default connect(appSelector, mapDispatchToProps)(App);
