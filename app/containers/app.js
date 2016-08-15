import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/app';

import { fetchFeed } from '../actions/feed';
import { checkUserAuth } from '../actions/user';

import appSelector from './../selectors/app';


const mapDispatchToProps = (dispatch) => (bindActionCreators({
    fetchFeed
}, dispatch));

export default connect(appSelector, mapDispatchToProps)(App);
